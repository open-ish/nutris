import { MutationTree, ActionTree } from 'vuex'
import {
  PatientsState,
  PatientsGetters,
  PatientsMutations,
  PatientsActions,
} from './types'
import FirebaseApp from '@/../firebaseApp'

import { names } from '@/enums/collections/firebase'
import { UserGetters, USER_NAMESPACE } from '../user/types'
import { Snapshot } from '@/models/firebase'
import { Patient } from '@/models/Patient'
import { firebaseQuerys } from '@/enums/firebaseQuerys'

const user = USER_NAMESPACE + '/' + UserGetters.USER

const state: PatientsState = {
  patients: [],
}

const getters = {
  [PatientsGetters.PATIENTS](state: PatientsState) {
    return state.patients
  },
  [PatientsGetters.FIND_PATIENT](state: PatientsState) {
    return (id: string) =>
      state.patients.find((patient) => {
        return patient.id === id
      })
  },
}

const actions: ActionTree<PatientsState, {}> = {
  [PatientsActions.GET_PATIENTS]({ commit, rootGetters }) {
    return FirebaseApp.db
      .collection(names.users)
      .doc(rootGetters[user].uid)
      .collection(names.patients)
      .orderBy('createdAt', firebaseQuerys.desc)
      .get()
      .then((querySnapshot: Snapshot[]) => {
        const patients: Patient[] = []
        querySnapshot.forEach((doc) => {
          patients.push({ ...doc.data(), id: doc.id } as Patient)
        })
        commit(PatientsMutations.GET_PATIENTS, patients)
      })
      .catch((error: Error) => error.message)
  },
  [PatientsActions.POST_PATIENTS]({ commit, rootGetters }, patient) {
    return FirebaseApp.db
      .collection(names.users)
      .doc(rootGetters[user].uid)
      .collection(names.patients)
      .add(patient)
      .then((doc: Snapshot) => {
        commit(PatientsMutations.POST_PATIENTS, { ...patient, id: doc.id })
      })
      .catch((error: Error) => error.message)
  },
  [PatientsActions.UPDATE_HISTORY_LOCALLY](
    { commit, getters },
    { history, historyId }
  ) {
    const index = getters[PatientsGetters.PATIENTS].findIndex(
      (currentPatient: Patient) => currentPatient.id === historyId
    )
    const noIndex = index === -1
    return !noIndex
      ? commit(PatientsMutations.UPDATE_HISTORY_LOCALLY, {
          history,
          index,
        })
      : new Error()
  },
}

const mutations: MutationTree<PatientsState> = {
  [PatientsMutations.GET_PATIENTS](state, patients: Patient[]) {
    state.patients = patients
  },
  [PatientsMutations.POST_PATIENTS](state, patient: Patient) {
    state.patients.unshift(patient)
  },
  [PatientsMutations.UPDATE_HISTORY_LOCALLY](state, { history, index }) {
    state.patients[index].calculationHistory?.unshift(history)
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}

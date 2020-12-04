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
// import { firebaseQuerys } from '@/enums/firebaseQuerys'

const user = USER_NAMESPACE + '/' + UserGetters.USER

const state: PatientsState = {
  patients: [],
}

const getters = {
  // [PatientsGetters.](state: PatientsState) {
  //   return state.
  // },
  // [PatientsGetters.FIND_DIET](state: PatientsState) {
  //   return (id: string) =>
  //     state..find((diet) => {
  //       return diet.id === id
  //     })
  // },
}

const actions: ActionTree<PatientsState, {}> = {
  // [PatientsActions.GET_]({ commit, rootGetters }) {
  //   return FirebaseApp.db
  //     .collection(names.users)
  //     .doc(rootGetters[user].uid)
  //     .collection(names.)
  //     .orderBy('date', firebaseQuerys.desc)
  //     .get()
  //     .then((querySnapshot: Snapshot[]) => {
  //       const : Diet[] = []
  //       querySnapshot.forEach((doc) => {
  //         .push({ ...doc.data(), id: doc.id } as Diet)
  //       })
  //       commit(PatientsMutations.GET_, )
  //     })
  //     .catch((error: Error) => error.message)
  // },
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
  // [PatientsActions.UPDATE_DIET](
  //   { commit, rootGetters, getters },
  //   { diet, id }
  // ) {
  //   const index = getters[PatientsGetters.].findIndex(
  //     (currentDiet: Diet) => currentDiet.id === id
  //   )
  //   const noIndex = index === -1
  //   return !noIndex
  //     ? FirebaseApp.db
  //         .collection(names.users)
  //         .doc(rootGetters[user].uid)
  //         .collection(names.)
  //         .doc(id)
  //         .set(diet)
  //         .then(() => {
  //           commit(PatientsMutations.UPDATE_DIET, {
  //             diet,
  //             index,
  //           })
  //         })
  //         .catch((error: Error) => error.message)
  //     : new Error()
  // },
  // [PatientsActions.DELETE_DIET]({ commit, rootGetters, getters }, id) {
  //   const index = getters[PatientsGetters.].findIndex(
  //     (diet: Diet) => diet.id === id
  //   )
  //   const noIndex = index === -1
  //   return !noIndex
  //     ? FirebaseApp.db
  //         .collection(names.users)
  //         .doc(rootGetters[user].uid)
  //         .collection(names.)
  //         .doc(id)
  //         .delete()
  //         .then(() => {
  //           commit(PatientsMutations.DELETE_DIET, index)
  //         })
  //         .catch((error: Error) => error.message)
  //     : new Error()
  // },
}

const mutations: MutationTree<PatientsState> = {
  // [PatientsMutations.GET_](state, : Diet[]) {
  //   state. =
  // },
  [PatientsMutations.POST_PATIENTS](state, patient: Patient) {
    state.patients.unshift(patient)
  },
  // [PatientsMutations.UPDATE_DIET](state, { diet, index }) {
  //   state.[index] = diet
  // },
  // [PatientsMutations.DELETE_DIET](state, index) {
  //   state..splice(index, 1)
  // },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}

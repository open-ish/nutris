import { MutationTree, ActionTree } from 'vuex'
import {
  ManageDietsState,
  ManageDietsGetters,
  ManageDietsMutations,
  ManageDietsActions,
} from './types'
import FirebaseApp from '@/../firebaseApp'

import { Diet } from '@/models/Diet'
import { names } from '@/enums/collections/firebase'
import { UserGetters, USER_NAMESPACE } from '../user/types'
import { Snapshot } from '@/models/firebase'
import { firebaseQuerys } from '@/enums/firebaseQuerys'

const user = USER_NAMESPACE + '/' + UserGetters.USER

const state: ManageDietsState = {
  diets: [],
}

const getters = {
  [ManageDietsGetters.DIETS](state: ManageDietsState) {
    return state.diets
  },
  [ManageDietsGetters.FIND_DIET](state: ManageDietsState) {
    return (id: string) =>
      state.diets.find((diet) => {
        return diet.id === id
      })
  },
}

const actions: ActionTree<ManageDietsState, {}> = {
  [ManageDietsActions.GET_DIETS]({ commit, rootGetters }) {
    return FirebaseApp.db
      .collection(names.users)
      .doc(rootGetters[user].uid)
      .collection(names.diets)
      .orderBy('createdAt', firebaseQuerys.desc)
      .get()
      .then((querySnapshot: Snapshot[]) => {
        const diets: Diet[] = []
        querySnapshot.forEach((doc) => {
          diets.push({ ...doc.data(), id: doc.id } as Diet)
        })
        commit(ManageDietsMutations.GET_DIETS, diets)
      })
      .catch((error: Error) => error.message)
  },
  [ManageDietsActions.POST_DIETS]({ commit, rootGetters }, diet) {
    return FirebaseApp.db
      .collection(names.users)
      .doc(rootGetters[user].uid)
      .collection(names.diets)
      .add(diet)
      .then((doc: Snapshot) => {
        commit(ManageDietsMutations.POST_DIETS, { ...diet, id: doc.id })
      })
      .catch((error: Error) => error.message)
  },
  [ManageDietsActions.UPDATE_DIET](
    { commit, rootGetters, getters },
    { diet, id }
  ) {
    const index = getters[ManageDietsGetters.DIETS].findIndex(
      (currentDiet: Diet) => currentDiet.id === id
    )
    const noIndex = index === -1
    return !noIndex
      ? FirebaseApp.db
          .collection(names.users)
          .doc(rootGetters[user].uid)
          .collection(names.diets)
          .doc(id)
          .set(diet)
          .then(() => {
            commit(ManageDietsMutations.UPDATE_DIET, {
              diet,
              index,
            })
          })
          .catch((error: Error) => error.message)
      : new Error()
  },
  [ManageDietsActions.DELETE_DIET]({ commit, rootGetters, getters }, id) {
    const index = getters[ManageDietsGetters.DIETS].findIndex(
      (diet: Diet) => diet.id === id
    )
    const noIndex = index === -1
    return !noIndex
      ? FirebaseApp.db
          .collection(names.users)
          .doc(rootGetters[user].uid)
          .collection(names.diets)
          .doc(id)
          .delete()
          .then(() => {
            commit(ManageDietsMutations.DELETE_DIET, index)
          })
          .catch((error: Error) => error.message)
      : new Error()
  },
  // saveLegacy() {
  // CHANGE DIETAS TO DIETS
  //   return (
  //     FirebaseApp.db
  //       .collection(names.users)
  //       .doc(rootGetters[user].uid)
  //       // .collection(names.diets)
  //       .collection('dietas')
  //       .get()
  //       .then((querySnapshot: Snapshot[]) => {
  //         const diets: any = []
  //         querySnapshot.forEach((doc: any) => {
  //           const { cal, protein, title } = doc.data().diet
  //           console.log('cal', cal)
  //           FirebaseApp.db
  //             .collection(names.users)
  //             .doc(rootGetters[user].uid)
  //             .collection(names.diets)
  //             .add({ name: title, calAmount: cal, proteinAmount: protein })
  //             .then((test: Snapshot) => {
  //               console.log('doc', test)
  //             })
  //             .catch((error: Error) => console.log(error.message))
  //         })
  //         commit(ManageDietsMutations.GET_DIETS, diets)
  //       })
  //       .catch((error: Error) => error)
  //   )
  // }
}

const mutations: MutationTree<ManageDietsState> = {
  [ManageDietsMutations.GET_DIETS](state, diets: Diet[]) {
    state.diets = diets
  },
  [ManageDietsMutations.POST_DIETS](state, diet: Diet) {
    state.diets.unshift(diet)
  },
  [ManageDietsMutations.UPDATE_DIET](state, { diet, index }) {
    state.diets[index] = diet
  },
  [ManageDietsMutations.DELETE_DIET](state, index) {
    state.diets.splice(index, 1)
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}

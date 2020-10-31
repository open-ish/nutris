import { MutationTree, ActionTree } from 'vuex'
import {
  ManageDietsState,
  ManageDietsMutations,
  ManageDietsActions,
} from './types'
import store from './index'

const state: ManageDietsState = {
  diets: [],
}

const getters = store.getters

const actions: ActionTree<ManageDietsState, {}> = {
  [ManageDietsActions.GET_DIETS]() {},
  [ManageDietsActions.POST_DIETS]() {},
}

const mutations: MutationTree<ManageDietsState> = {
  [ManageDietsMutations.GET_DIETS]() {},
  [ManageDietsMutations.POST_DIETS]() {},
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}

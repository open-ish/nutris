import {
  LoadingPageState,
  LoadingPageGetters,
  LoadingPageActions,
  LoadingPageMutations,
} from './types'
import { ActionTree, MutationTree } from 'vuex'

const state: LoadingPageState = {
  loading: false,
}

const getters = {
  [LoadingPageGetters.LOADING](state: LoadingPageState) {
    return state.loading
  },
}

const actions: ActionTree<LoadingPageState, {}> = {
  [LoadingPageActions.TOGGLE]({ commit }, value) {
    commit(LoadingPageMutations.TOGGLE, value)
  },
}

const mutations: MutationTree<LoadingPageState> = {
  [LoadingPageMutations.TOGGLE](state, value) {
    state.loading = value
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}

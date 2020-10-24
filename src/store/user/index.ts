import { UserState, UserGetters, UserMutations, UserActions } from './types'
import { MutationTree, ActionTree } from 'vuex'
import { signInWithGoogle } from '@/services/auth.service.ts'

const state: UserState = {
  user: null,
}

const getters = {
  [UserGetters.IS_AUTH](state: UserState) {
    return state.user?.uid
  },
  [UserGetters.USER](state: UserState) {
    return state.user
  },
}

const actions: ActionTree<UserState, any> = {
  async [UserActions.LOGIN_GOOGLE]({ commit }) {
    const user = await signInWithGoogle()

    !user
      ? console.error('error de login')
      : commit(UserMutations.CHANGE_USER, user)
  },
}

const mutations: MutationTree<UserState> = {
  [UserMutations.CHANGE_USER](state, user) {
    state.user = user
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}

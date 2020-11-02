import {
  PopupMessageState,
  PopupMessageGetters,
  PopupMessageActions,
  PopupMessageMutations,
} from './types'
import { ActionTree, MutationTree } from 'vuex'

const state: PopupMessageState = {
  message: '',
  mode: 'default',
}

const getters = {
  [PopupMessageGetters.INFOS](state: PopupMessageState) {
    return state
  },
}

const actions: ActionTree<PopupMessageState, {}> = {
  [PopupMessageActions.SHOW_MESSAGE](
    { commit },
    {
      message,
      time,
      mode,
    }: {
      message: PopupMessageState['message']
      time: number
      mode: PopupMessageState['mode']
    }
  ) {
    commit(PopupMessageMutations.SHOW_MESSAGE, { message, mode })
    setTimeout(() => {
      const resetState = ''
      commit(PopupMessageMutations.SHOW_MESSAGE, {
        message: resetState,
        mode: 'default',
      })
    }, time)
  },
}

const mutations: MutationTree<PopupMessageState> = {
  [PopupMessageMutations.SHOW_MESSAGE](state, { message, mode }) {
    state.message = message
    state.mode = mode
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}

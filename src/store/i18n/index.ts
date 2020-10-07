import { I18nState, I18nGetters, I18nActions, I18nMutations } from './types'
import { I18n } from '@/enums/i18n'
import { ActionTree, MutationTree } from 'vuex'

const state: I18nState = {
  language: I18n.br,
}

const getters = {
  [I18nGetters.LANGUAGE](state: any) {
    return state.language
  },
}

const actions: ActionTree<I18nState, I18nState> = {
  [I18nActions.CHANGE_LANGUAGE](
    { commit },
    newLanguage: I18nState['language']
  ) {
    commit(I18nMutations.CHANGE_LANGUAGE, newLanguage)
  },
}

const mutations: MutationTree<I18nState> = {
  [I18nMutations.CHANGE_LANGUAGE](state, newLanguage: I18nState['language']) {
    state.language = newLanguage
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}

import {
  ManageDietsState,
  ManageDietsGetters,
  ManageDietsMutations,
} from './types'
// import { I18n } from '@/enums/i18n'
import { MutationTree } from 'vuex'
import { Diet } from '@/models/Diet'

const state: ManageDietsState = {
  diets: [{ name: 'diet', proteinAmount: 1, calAmount: 2 }],
}

const getters = {
  [ManageDietsGetters.DIETS](state: ManageDietsState) {
    console.log('state.diets', state.diets)
    return state.diets
  },
}

// const actions: ActionTree<I18nState, I18nState> = {
//   [I18nActions.CHANGE_LANGUAGE](
//     { commit },
//     newLanguage: I18nState['language']
//   ) {
//     commit(I18nMutations.CHANGE_LANGUAGE, newLanguage)
//   },
// }

const mutations: MutationTree<ManageDietsState> = {
  [ManageDietsMutations.CHANGE_DIETS](state, newDiet: Diet) {
    state.diets.push(newDiet)
  },
}

export default {
  namespaced: true,
  state,
  getters,
  // actions,
  mutations,
}

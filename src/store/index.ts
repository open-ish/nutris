import { createStore } from 'vuex'
import i18n from './i18n'
import manageDiets from './manage-diets'

export default createStore({
  modules: {
    i18n,
    manageDiets,
  },
})

import { createStore } from 'vuex'
import i18n from './i18n'
import manageDiets from './manage-diets'
import user from './user'

const modules = {
  i18n,
  manageDiets,
  user,
}

export default createStore({
  modules,
})

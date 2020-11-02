import { createStore } from 'vuex'
import i18n from './i18n'
import manageDiets from './manage-diets'
import popupMessage from './popup-message'
import user from './user'

const modules = {
  i18n,
  manageDiets,
  user,
  popupMessage,
}

export default createStore({
  modules,
})

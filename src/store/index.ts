import { createStore } from 'vuex'
import i18n from './i18n'
import manageDiets from './manage-diets'
import patients from './patients'
import popupMessage from './popup-message'
import loadingPage from './loading-page'
import user from './user'

const modules = {
  i18n,
  manageDiets,
  patients,
  user,
  loadingPage,
  popupMessage,
}

export default createStore({
  modules,
})

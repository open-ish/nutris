import { createStore } from 'vuex'
import manageDiets from '@/store/manage-diets/mockModule'
import i18n from '@/store/i18n'
import user from '@/store/user'

const modules = {
  manageDiets,
  i18n,
  user,
}

export default createStore({
  modules,
})

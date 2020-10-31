import { RouteLocationNormalized } from 'vue-router'
import { Names, Paths } from '@/router/default/enums'
import Index from '@/layouts/Index.vue'
import ManageDiets from '@/views/default/manage-diets/ManageDiets.vue'
import New from '@/views/default/manage-diets/components/new/New.vue'
import store from '@/store/index'
import {
  ManageDietsActions,
  ManageDietsGetters,
  MANAGE_DIETS_NAMESPACE,
} from '@/store/manage-diets/types'

const getDiets = MANAGE_DIETS_NAMESPACE + '/' + ManageDietsActions.GET_DIETS
const diets = MANAGE_DIETS_NAMESPACE + '/' + ManageDietsGetters.DIETS

export default {
  path: Paths.manageDiets,
  name: Names.manageDiets,
  component: Index,
  meta: {
    requiresAuth: true,
  },
  beforeEnter: (
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: Function
  ) => {
    // !store.getters[diets].length && store.dispatch(getDiets)
    store.dispatch(getDiets).then(() => {
      next()
    })
  },
  children: [
    {
      path: '',
      component: ManageDiets,
    },
    {
      path: Paths.new,
      name: Names.manageDietsNew,
      component: New,
    },
  ],
}

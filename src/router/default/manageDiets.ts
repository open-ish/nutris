import { RouteLocationNormalized } from 'vue-router'

import { Names, Paths } from '@/router/default/enums'
const Index = () =>
  import(/* webpackChunkName: "ManageDiets" */ '@/layouts/Index.vue')
const ManageDiets = () =>
  import(
    /* webpackChunkName: "ManageDiets" */ '@/views/default/manage-diets/ManageDiets.vue'
  )
const Form = () =>
  import(
    /* webpackChunkName: "Form" */ '@/views/default/manage-diets/components/form/Form.vue'
  )
import store from '@/store'
import {
  ManageDietsActions,
  // ManageDietsGetters,
  MANAGE_DIETS_NAMESPACE,
} from '@/store/manage-diets/types'
import {
  LOADING_PAGE_NAMESPACE,
  LoadingPageActions,
} from '@/store/loading-page/types'

// const diets = MANAGE_DIETS_NAMESPACE + '/' + ManageDietsGetters.DIETS
const getDiets = MANAGE_DIETS_NAMESPACE + '/' + ManageDietsActions.GET_DIETS
const loadingSpace = LOADING_PAGE_NAMESPACE + '/' + LoadingPageActions.TOGGLE

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
    store.dispatch(loadingSpace, true)
    store.dispatch(getDiets).then(() => {
      store.dispatch(loadingSpace, false)
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
      component: Form,
    },
    {
      path: Paths.edit + ':id',
      name: Names.manageDietsEdit,
      component: Form,
      props: true,
    },
  ],
}

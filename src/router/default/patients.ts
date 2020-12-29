import { RouteLocationNormalized } from 'vue-router'

import Index from '@/layouts/Index.vue'
import Patients from '@/views/default/patients/Patients.vue'
import History from '@/views/default/patients/components/history/History.vue'
import Form from '@/views/default/patients/components/form/Form.vue'
import { Names, Paths } from '@/router/default/enums'
import {
  LOADING_PAGE_NAMESPACE,
  LoadingPageActions,
} from '@/store/loading-page/types'
import {
  PatientsActions,
  PatientsGetters,
  PATIENTS_NAMESPACE,
} from '@/store/patients/types'
const getPatients = PATIENTS_NAMESPACE + '/' + PatientsActions.GET_PATIENTS
import store from '@/store'

const loadingSpace = LOADING_PAGE_NAMESPACE + '/' + LoadingPageActions.TOGGLE
const patients = PATIENTS_NAMESPACE + '/' + PatientsGetters.PATIENTS

export default {
  path: Paths.patients,
  name: Names.patients,
  component: Index,
  meta: {
    requiresAuth: true,
  },
  children: [
    {
      path: '',
      component: Patients,
      beforeEnter: (
        to: RouteLocationNormalized,
        from: RouteLocationNormalized,
        next: Function
      ) => {
        store.dispatch(loadingSpace, true)
        !store.getters[patients].length
          ? store.dispatch(getPatients).then(() => {
              store.dispatch(loadingSpace, false)
              next()
            })
          : setTimeout(() => {
              store.dispatch(loadingSpace, false)
              next()
            }, 500)
      },
    },
    {
      path: Paths.new,
      name: Names.patientsNew,
      component: Form,
    },
    {
      path: Paths.details + ':id',
      name: Names.patientsHistory,
      component: History,
      props: true,
      beforeEnter: (
        to: RouteLocationNormalized,
        from: RouteLocationNormalized,
        next: Function
      ) => {
        store.dispatch(loadingSpace, true)
        !store.getters[patients].length
          ? store.dispatch(getPatients).then(() => {
              store.dispatch(loadingSpace, false)
              next()
            })
          : setTimeout(() => {
              store.dispatch(loadingSpace, false)
              next()
            }, 500)
      },
    },
  ],
}

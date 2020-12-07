import { RouteLocationNormalized } from 'vue-router'

import Index from '@/layouts/Index.vue'
import Patients from '@/views/default/patients/Patients.vue'
import PatientDetails from '@/views/default/patients/components/details/Details.vue'
import Form from '@/views/default/patients/components/form/Form.vue'
import { Names, Paths } from '@/router/default/enums'
import {
  LOADING_PAGE_NAMESPACE,
  LoadingPageActions,
} from '@/store/loading-page/types'
import { PatientsActions, PATIENTS_NAMESPACE } from '@/store/patients/types'
const getPatients = PATIENTS_NAMESPACE + '/' + PatientsActions.GET_PATIENTS

import store from '@/store'

const loadingSpace = LOADING_PAGE_NAMESPACE + '/' + LoadingPageActions.TOGGLE

export default {
  path: Paths.patients,
  name: Names.patients,
  component: Index,
  meta: {
    requiresAuth: true,
  },
  beforeEnter: (
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: Function
  ) => {
    store.dispatch(loadingSpace, true)
    store.dispatch(getPatients).then(() => {
      store.dispatch(loadingSpace, false)
      next()
    })
  },
  children: [
    {
      path: '',
      component: Patients,
    },
    {
      path: Paths.new,
      name: Names.patientsNew,
      component: Form,
    },
    {
      path: Paths.details + ':id',
      name: Names.patientsDetails,
      component: PatientDetails,
      props: true,
    },
  ],
}

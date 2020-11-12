import Index from '@/layouts/Index.vue'
import NewPatient from '@/views/default/new-patient/NewPatient.vue'
import { Names, Paths } from '@/router/default/enums'

export default {
  path: Paths.newPatient,
  name: Names.newPatient,
  component: Index,
  meta: {
    requiresAuth: true,
  },
  children: [
    {
      path: '',
      component: NewPatient,
    },
  ],
}

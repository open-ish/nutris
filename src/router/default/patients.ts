import Index from '@/layouts/Index.vue'
import Patients from '@/views/default/patients/Patients.vue'
import Form from '@/views/default/patients/components/form/Form.vue'
import { Names, Paths } from '@/router/default/enums'

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
    },
    {
      path: Paths.new,
      name: Names.patientsNew,
      component: Form,
    },
  ],
}

import { Names, Paths } from '@/router/default/enums'
import Welcome from '@/views/default/welcome/Welcome.vue'

export default {
  path: Paths.welcome,
  name: Names.welcome,
  component: Welcome,
  meta: {
    requiresAuth: true,
  },
}

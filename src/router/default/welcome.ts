import { Names, Paths } from '@/router/default/enums'
import Home from '@/views/alt/home/Home.vue'

export default {
  path: Paths.welcome,
  name: Names.welcome,
  component: Home,
  meta: {
    requiresAuth: true,
  },
}

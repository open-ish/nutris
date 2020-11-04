import { Names, Paths } from '@/router/default/enums'
import Home from '@/views/alt/home/Home.vue'

export default {
  path: Paths.history,
  name: Names.history,
  component: Home,
  meta: {
    requiresAuth: true,
  },
}

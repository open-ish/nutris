import { Names, Paths } from '@/router/default/enums'
import Home from '@/views/default/home/Home.vue'

export default {
  path: Paths.calculate,
  name: Names.calculate,
  component: Home,
  meta: {
    requiresAuth: true,
  },
}

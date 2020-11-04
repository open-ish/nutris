const Home = () =>
  import(/* webpackChunkName: "Home" */ '@/views/alt/home/Home.vue')
import { Paths, Names } from '@/router/alt/enums'

export default {
  path: Paths.home,
  name: Names.home,
  component: Home,
}

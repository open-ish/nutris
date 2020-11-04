import history from './history'
import calculate from './calculate'
import manageDiets from './manageDiets'
import patients from './patients'
const LDefault = () =>
  import(/* webpackChunkName: "Default" */ '@/layouts/default/Default.vue')
import { LayoutsName, LayoutsPaths } from '@/router/enums'

export default {
  path: LayoutsPaths.default,
  name: LayoutsName.default,
  component: LDefault,
  children: [history, calculate, manageDiets, patients],
}

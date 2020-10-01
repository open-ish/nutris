import home from './home'
import about from './about'
import LDefault from '@/layouts/default/Default.vue'
import { LayoutsName, LayoutsPaths } from '@/router/enums'

export const main = {
  path: LayoutsPaths.default,
  name: LayoutsName.default,
  component: LDefault,
  children: [about, home],
}

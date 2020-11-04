import { LayoutsName, LayoutsPaths } from '@/router/enums'
const Alt = () => import(/* webpackChunkName: "alt" */ '@/views/alt/Alt.vue')

import home from './home'

export const alt = {
  path: LayoutsPaths.alt,
  name: LayoutsName.alt,
  component: Alt,
  children: [home],
}

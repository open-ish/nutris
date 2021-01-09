import { LayoutsName, LayoutsPaths } from '@/router/enums'
const Alt = () => import(/* webpackChunkName: "alt" */ '@/layouts/alt/Alt.vue')

import home from './home'
import { notFound, notFoundFallback } from './notFound'

export const alt = {
  path: LayoutsPaths.alt,
  name: LayoutsName.alt,
  component: Alt,
  children: [home, notFoundFallback, notFound],
}

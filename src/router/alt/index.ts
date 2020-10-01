import { LayoutsName, LayoutsPaths } from '@/router/enums'
import Alt from '@/layouts/alt/Alt.vue'
import someAlt from './someAlt'

export const alt = {
  path: LayoutsPaths.alt,
  name: LayoutsName.alt,
  component: Alt,
  children: [someAlt],
}

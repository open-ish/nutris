import { Names, Paths } from './enums'

export default {
  path: Paths.about,
  name: Names.about,
  component: () =>
    import(/* webpackChunkName: "about" */ '@/views/default/About.vue'),
}

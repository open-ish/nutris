import home from './home'
import about from './about'
import history from './history'
import calculate from './calculate'
import manageDiets from './manageDiets'
import patients from './patients'
import newPatient from './newPatient'
import LDefault from '@/layouts/default/Default.vue'
import { LayoutsName, LayoutsPaths } from '@/router/enums'

export default {
  path: LayoutsPaths.default,
  name: LayoutsName.default,
  component: LDefault,
  children: [
    about,
    home,
    history,
    calculate,
    manageDiets,
    patients,
    newPatient,
  ],
}

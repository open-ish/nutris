import { Names, Paths } from '@/router/default/enums'
import Index from '@/layouts/Index.vue'
import ManageDiets from '@/views/default/manage-diets/ManageDiets.vue'
import New from '@/views/default/manage-diets/components/new/New.vue'

export default {
  path: Paths.manageDiets,
  name: Names.manageDiets,
  component: Index,
  children: [
    {
      path: '',
      component: ManageDiets,
    },
    {
      path: Paths.manageDietsNew,
      name: Names.manageDietsNew,
      component: New,
    },
  ],
}

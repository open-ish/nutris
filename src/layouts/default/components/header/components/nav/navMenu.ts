import { reactive } from 'vue'
import { navI18nPath } from '@/layouts/default/components/header/components/nav/nav.i18n.ts'
import { Paths } from '@/router/default/enums'

export function navMenu() {
  const navOptions = reactive([
    // I will think if it is necessary
    // {
    //   path: Paths.calculate,
    //   i18n: navI18nPath.calculate,
    //   icon: 'nutris-ticket',
    // },
    {
      path: Paths.patients,
      i18n: navI18nPath.patients,
      icon: 'nutris-users',
    },
    {
      path: Paths.patients + '/new',
      i18n: navI18nPath.newPacient,
      icon: 'nutris-user',
    },
    {
      path: Paths.manageDiets,
      i18n: navI18nPath.manageDiets,
      fallback: navI18nPath.fallBackManageDiets,
      icon: 'nutris-checklist',
      loading: false,
    },
  ])
  return { navOptions }
}

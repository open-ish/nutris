// All i18n configuration will be imported here

import { createI18n } from 'vue-i18n'
import {
  defaultNavEn,
  defaultNavBr,
} from '@/layouts/default/components/header/components/nav/nav.i18n.ts'

export const i18n = createI18n({
  legacy: true,
  locale: 'br',
  // texts to translate
  messages: {
    en: {
      nav: defaultNavEn,
    },
    br: {
      nav: defaultNavBr,
    },
  },
})

import { createI18n } from 'vue-i18n'
import {
  defaultNavEn,
  defaultNavBr,
} from '@/layouts/default/components/nav/nav.i18n.ts'

export const i18n = createI18n({
  legacy: true,
  locale: 'br',
  messages: {
    en: {
      nav: defaultNavEn,
    },
    br: {
      nav: defaultNavBr,
    },
  },
})

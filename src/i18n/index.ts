// All i18n configuration will be imported here

/*
==================
1. Global
2. Default Layout
==================
*/
import { createI18n } from 'vue-i18n'

/*
==================
2. Default Layout
==================
*/
import {
  defaultNavEn,
  defaultNavPt,
} from '@/layouts/default/components/header/components/nav/nav.i18n.ts'
import {
  userOptionsEn,
  userOptionsPt,
} from '@/layouts/default/components/header/components/user-options/userOptions.i18n.ts'
import {
  defaultFooterEn,
  defaultFooterPt,
} from '@/layouts/default/components/footer/footer.i18n.ts'

import { defaultHomeEn, defaultHomePt } from '@/views/default/home/homei18n.ts'

export const i18n = createI18n({
  legacy: true,
  locale: 'pt',
  // texts to translate
  messages: {
    en: {
      // 2. Default Layout
      nav: defaultNavEn,
      userOptions: userOptionsEn,
      home: defaultHomeEn,
      footer: defaultFooterEn,
    },
    pt: {
      // 2. Default Layout
      nav: defaultNavPt,
      userOptions: userOptionsPt,
      home: defaultHomePt,
      footer: defaultFooterPt,
    },
  },
})

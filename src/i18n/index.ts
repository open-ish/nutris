// All i18n configuration will be imported here

/*
==================
1. Global
2. Default Layout
3. Components
4. Pages
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
import { defaultHomeEn, defaultHomePt } from '@/views/alt/home/homei18n.ts'

/*
==================
3. Components
==================
*/
import { fixedBtnEn, fixedBtnPt } from '@/components/button/FixedBtn.i18n.ts'

/*
==================
4. Pages
==================
*/
import {
  manageDietsEn,
  manageDietsPt,
} from '@/views/default/manage-diets/ManageDiets.i18n.ts'
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
      // 3. Components
      fixedBtn: fixedBtnEn,
      // 4. Pages
      manageDiets: manageDietsEn,
    },
    pt: {
      // 2. Default Layout
      nav: defaultNavPt,
      userOptions: userOptionsPt,
      home: defaultHomePt,
      footer: defaultFooterPt,
      // 3. Components
      fixedBtn: fixedBtnPt,
      // 4. Pages
      manageDiets: manageDietsPt,
    },
  },
})

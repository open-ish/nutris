// setup
import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import FirebaseApp from '@/../firebaseApp'

import { getCssVariableValue } from '@/helpers/styles.ts'
import { User } from '@/models/User.ts'
import '@/assets/styles/index.scss'
// @testing https://github.com/intlify/vue-i18n-next
import { i18n } from '@/i18n/index.ts'

const init = () =>
  createApp(App)
    .use(store)
    .use(router)
    .use(i18n)
    .mount('#app')

FirebaseApp.auth().onAuthStateChanged(async (user: User) => {
  if (user) {
    // user commit
  } else {
    // another
  }
  init()
})

const BRAND_COLOR = getCssVariableValue('--brand-color')
const BRAND_COLOR_LIGHTEN = getCssVariableValue('--brand-color-lighten')
const WELCOME_DEV = '%c Hi, Nutris Dev!! ​😁🍉​'
const WELCOME_DEV_STYLES = `font-size: 14px; color: ${BRAND_COLOR_LIGHTEN}; border: 0.5px solid ${BRAND_COLOR}; border-radius: 2px`

console.log(
  process.env.VUE_APP_FIREBASE_PROJECT_ID?.includes('dev') && WELCOME_DEV,
  WELCOME_DEV_STYLES
)

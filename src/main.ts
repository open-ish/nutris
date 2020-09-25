import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import FirebaseApp from '@/../firebaseApp'

import { User } from '@/models/User.ts'

const init = () =>
  createApp(App)
    .use(store)
    .use(router)
    .mount('#app')

FirebaseApp.auth().onAuthStateChanged(async (user: User) => {
  if (user) {
    // user commit
  } else {
    // another
  }
  init()
})

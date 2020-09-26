import firebase from 'firebase/app'
import 'firebase/firestore'
require('firebase/auth')

const FIREBASE_URL = '.firebaseapp.com'
const config = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_PROJECT_ID + FIREBASE_URL,
  databaseURL:
    'https://' + process.env.VUE_APP_FIREBASE_PROJECT_ID + FIREBASE_URL,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIREBASE_PROJECT_ID + '.appspot.com',
  appId: process.env.VUE_APP_FIREBASE_ID,
}

const FirebaseApp: any = firebase.initializeApp(config)
const firestore = firebase.firestore()

FirebaseApp.db = firestore
FirebaseApp.db.enablePersistence({ synchronizeTabs: true })

export default FirebaseApp

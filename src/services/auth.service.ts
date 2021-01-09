import firebase from 'firebase'
import user from '@/store/user/index.ts'
import { LayoutsPaths } from '@/router/enums'
import { Paths } from '@/router/alt/enums'

export const signInWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider()
  return firebase
    .auth()
    .signInWithPopup(provider)
    .then(() => {
      return firebase.auth().currentUser
    })
    .catch((error: Error) => error)
}

export const logout = () => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      firebase.auth().currentUser
      user.mutations.CHANGE_USER({})
      const homePath = LayoutsPaths.alt + Paths.home
      window.location.replace(homePath)
    })
    .catch((error: Error) => error)
}

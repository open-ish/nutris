import firebase from 'firebase'
import user from '@/store/user/index.ts'

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
      window.location.replace('/')
    })
    .catch((error: Error) => error)
}

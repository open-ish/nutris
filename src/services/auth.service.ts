import firebase from 'firebase'

export const signInWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider()
  return firebase
    .auth()
    .signInWithPopup(provider)
    .then(() => {
      return firebase.auth().currentUser
    })
    .catch((error) => error)
}

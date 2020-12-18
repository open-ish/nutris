import FirebaseApp from '@/../firebaseApp'
import { names } from '@/enums/collections/firebase'
import { CalculationHistory } from '@/models/CalculationHistory'
import { Snapshot } from '@/models/firebase'
import userStore from '@/store/user/index.ts'
import store from '@/store/'
import { UserGetters, USER_NAMESPACE } from '@/store/user/types'

const userNamespace = USER_NAMESPACE + '/' + UserGetters.USER

interface GetCalculationHistoryTypes {
  historyId: string
}
export const getCalculationHistory = ({
  historyId,
}: GetCalculationHistoryTypes) => {
  const userId = store.getters[userNamespace]?.uid

  return FirebaseApp.db
    .collection(names.users)
    .doc(userId)
    .collection(names.history)
    .doc(historyId)
    .collection(names.calculationHistory)
    .get()
    .then((querySnapshot: Snapshot[]) => {
      const history: CalculationHistory[] = []
      querySnapshot.forEach((doc) => {
        history.push({ ...doc.data() })
      })

      return history
    })
    .catch((error: Error) => error.message)
}

interface PostCalculationHistoryTypes extends GetCalculationHistoryTypes {
  data: CalculationHistory
}
export const postCalculationHistory = ({
  historyId,
  data,
}: PostCalculationHistoryTypes) => {
  const userId = store.getters[userNamespace]?.uid

  return FirebaseApp.db
    .collection(names.users)
    .doc(userId)
    .collection(names.history)
    .doc(historyId)
    .collection(names.calculationHistory)
    .add(data)
    .then((doc: Snapshot) => {
      return doc.id
    })
    .catch((error: Error) => error.message)
}

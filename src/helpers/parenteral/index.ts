import { parenteral } from '@open-ish/nutris-roles'

// example of use
export const data = {
  patient: {
    body: 60,
    calGoal: 0.3,
    proteinGoal: 0.4,
    volumeReceived: 10,
  },
  diet: { cal: 3, protein: 1 },
}
console.log('paraenteral', parenteral(data))

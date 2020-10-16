import { Diet } from './Diet'

export interface CalculationHistory {
  patient: {
    currentBody: number,
    calGoal: number,
    proteinGoal: number,
    volumeReceived: number,
  },
  diet: Diet,
  createdAt: string
}

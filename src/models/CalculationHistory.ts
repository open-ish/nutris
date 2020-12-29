import { Diet } from './Diet'

export interface CalculationHistory {
  patient: {
    currentBody: number
    calGoal: number
    proteinGoal: number
    volumeReceived: number
  }
  diet: Diet
  createdAt: number | Date
}

export interface CalculatorIntermediate {
  parenteralResult: null
  patient: {
    body?: number
    currentBody: number
    calGoal: number
    proteinGoal: Number
    volumeReceived: Number
  }
  diet: {
    cal?: Number
    calAmount: Number
    protein?: Number
    proteinAmount: Number
  }
  createdAt?: number
}

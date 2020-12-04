import { CalculationHistory } from './CalculationHistory'

export interface Patient {
  anonymousIdentifier: string //can not have empty space. The user will fill it.
  anonymousText: ''
  anonymousNumber: ''
  currentBody: string
  born: string //date
  gender: 'F' | 'M' | null
  calculationHistory: CalculationHistory[] | null
  lastUpdated: number | Date
  createdAt: number | Date
}

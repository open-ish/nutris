import { CalculationHistory } from './CalculationHistory'

export interface Patient {
  currentBody: number
  born: string //date
  gender: string
  anonymousIdentifier: string //can not have empty space. The user will fill it.
  calculationHistory: CalculationHistory[] | null
}

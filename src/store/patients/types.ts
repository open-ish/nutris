import { Patient } from '@/models/Patient'
export const PATIENTS_NAMESPACE = 'patients'

export interface PatientsState {
  patients: Patient[]
}

// getters
export const PatientsGetters = {
  PATIENTS: 'PATIENTS',
  // FIND_DIET: 'FIND_DIET',
}

// actions
export const PatientsActions = {
  GET_PATIENTS: 'GET_PATIENTS',
  POST_PATIENTS: 'POST_PATIENTS',
  // UPDATE_DIET: 'UPDATE_DIET',
  // DELETE_DIET: 'DELETE_DIET',
}

// mutations
export const PatientsMutations = {
  GET_PATIENTS: 'GET_PATIENTS',
  POST_PATIENTS: 'POST_PATIENTS',
  // UPDATE_DIET: 'UPDATE_DIET',
  // DELETE_DIET: 'DELETE_DIET',
}

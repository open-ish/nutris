import { Patient } from '@/models/Patient'
export const PATIENTS_NAMESPACE = 'patients'

export interface PatientsState {
  patients: Patient[]
}

// getters
export const PatientsGetters = {
  PATIENTS: 'PATIENTS',
  FIND_PATIENT: 'FIND_PATIENT',
}

// actions
export const PatientsActions = {
  GET_PATIENTS: 'GET_PATIENTS',
  POST_PATIENTS: 'POST_PATIENTS',
  UPDATE_HISTORY_LOCALLY: 'UPDATE_HISTORY_LOCALLY',
}

// mutations
export const PatientsMutations = {
  GET_PATIENTS: 'GET_PATIENTS',
  POST_PATIENTS: 'POST_PATIENTS',
  UPDATE_HISTORY_LOCALLY: 'UPDATE_HISTORY_LOCALLY',
}

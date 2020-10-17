import { Diet } from '@/models/Diet'

export const MANAGE_DIETS_NAMESPACE = 'manageDiets'

export interface ManageDietsState {
  diets: Diet[]
}

// getters
export const ManageDietsGetters = {
  DIETS: 'DIETS',
}

// // actions
// export const ManageDietsActions = {
//   CHANGE_LANGUAGE: 'CHANGE_LANGUAGE',
// }

// mutations
export const ManageDietsMutations = {
  CHANGE_DIETS: 'CHANGE_DIETS',
}

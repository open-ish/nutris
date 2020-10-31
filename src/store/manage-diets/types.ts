import { Diet } from '@/models/Diet'

export const MANAGE_DIETS_NAMESPACE = 'manageDiets'

export interface ManageDietsState {
  diets: Diet[]
}

// getters
export const ManageDietsGetters = {
  DIETS: 'DIETS',
}

// actions
export const ManageDietsActions = {
  GET_DIETS: 'GET_DIETS',
  POST_DIETS: 'POST_DIETS',
}

// mutations
export const ManageDietsMutations = {
  GET_DIETS: 'GET_DIETS',
  POST_DIETS: 'POST_DIETS',
}

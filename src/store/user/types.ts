import { User } from '@/models/User.ts'

export const USER_NAMESPACE = 'user'

export interface UserState {
  user?: User | null
}

// getters
export const UserGetters = {
  IS_AUTH: 'IS_AUTH',
  USER: 'USER',
}

// // actions
export const UserActions = {
  LOGIN_GOOGLE: 'LOGIN_GOOGLE',
}

// mutations
export const UserMutations = {
  CHANGE_USER: 'CHANGE_USER',
}

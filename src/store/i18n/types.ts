import { I18n } from '@/enums/i18n'

export interface I18nState {
  language: I18n.en | I18n.pt
}

// getters
export const I18nGetters = {
  LANGUAGE: 'LANGUAGE',
  LABEL_TOGGLE: 'LABEL_TOGGLE',
}

// actions
export const I18nActions = {
  CHANGE_LANGUAGE: 'CHANGE_LANGUAGE',
}

// mutations
export const I18nMutations = {
  CHANGE_LANGUAGE: 'CHANGE_LANGUAGE',
}

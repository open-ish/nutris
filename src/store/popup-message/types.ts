export const POPUP_MESSAGE_NAMESPACE = 'popupMessage'

export interface PopupMessageState {
  message: string
  mode: 'default' | 'success' | 'danger'
}

// getters
export const PopupMessageGetters = {
  INFOS: 'INFOS',
}

// actions
export const PopupMessageActions = {
  SHOW_MESSAGE: 'SHOW_MESSAGE',
}

// mutations
export const PopupMessageMutations = {
  SHOW_MESSAGE: 'SHOW_MESSAGE',
}

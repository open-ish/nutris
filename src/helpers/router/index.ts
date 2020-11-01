import { Router } from 'vue-router'

const paramsQuerysFactory = (router: Router) => router.currentRoute?.value
export function querys(router: Router) {
  const { query } = paramsQuerysFactory(router)

  return query
}

export function params(router: Router) {
  const { params } = paramsQuerysFactory(router)

  return params
}

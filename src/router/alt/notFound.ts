const NotFound = () =>
  import(
    /* webpackChunkName: "fail-over" */ '@/views/alt/not-found/NotFound.vue'
  )

export const notFoundFallback = { path: '/404', component: NotFound }
export const notFound = {
  path: '/:pathMatch(.*)*',
  redirect: '/404',
}

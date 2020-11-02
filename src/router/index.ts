import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import lDefault from './default'
import { alt } from './alt'
import firebase from 'firebase'

const routes: Array<RouteRecordRaw> = [lDefault, alt]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth)
  requiresAuth && !currentUser ? next('/') : next()
})

export default router

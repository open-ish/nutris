import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import lDefault from './default'
import { alt } from './alt'

const routes: Array<RouteRecordRaw> = [lDefault, alt]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router

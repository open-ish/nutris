import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { main } from './main'
import { alt } from './alt'

const routes: Array<RouteRecordRaw> = [main, alt]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router

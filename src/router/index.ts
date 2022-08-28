import { createRouter, createWebHistory } from 'vue-router'
import { MainRoutes } from './routes'

const routes = [
  ...MainRoutes
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router

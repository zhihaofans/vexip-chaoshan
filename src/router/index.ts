import { createRouter, createWebHistory } from 'vue-router'

import type { RouteRecordRaw } from 'vue-router'
import { Loading } from 'vexip-ui'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Search',
    component: () => import('../views/Search.vue')
  }
]

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeResolve(() => {
  Loading.open(5)
})

router.afterEach(() => {
  requestAnimationFrame(() => {
    Loading.open(100)
  })
})

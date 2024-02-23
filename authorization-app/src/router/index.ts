import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useAuthorization } from '@/utils/useAuthorization'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
    }
  ]
})

router.beforeEach((to, from, next) => {
  const { getUsernameCookie } = useAuthorization()
  const username = getUsernameCookie()

  if (to.meta.requiresAuth && !username) {
    next({ path: 'login', query: { redirect: to.fullPath }})
    return
  } else {
    next()
  }
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    layout: true,
    component: Home,
    meta: {layout: true},
  },
  {
    path: '/products',
    name: 'products',
    meta: {layout: true},
    component: function () {
      return import('../views/Products.vue')
    }
  },
  {
    path: '/signin',
    name: 'signin',
    meta: {layout: false},
    component: function () {
      return import('../views/SignIn.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

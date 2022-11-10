import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/creation:id',
      name: 'creation',
      component: () => import('../views/CreationComponent.vue')
    },
    {
      path: '/careers',
      name: 'careers',
      component: () => import('../views/CareersView.vue')
    },
    {
      path: '/events',
      name: 'events',
      component: () => import('../views/EventsView.vue')
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('../views/ProductsView.vue')
    },
    {
      path: '/support',
      name: 'support',
      component: () => import('../views/SupportView.vue')
    },
    {
      path: '/support/:id',
      name: 'supportItem',
      component: () => import('../views/CreationComponent.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('../views/404.vue')
    }
  ]
})

export default router

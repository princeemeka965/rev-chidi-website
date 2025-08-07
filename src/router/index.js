import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  },
  {
    path: '/ministries',
    name: 'ministries',
    component: () => import('../views/Ministries.vue')
  },
  {
    path: '/media',
    name: 'media',
    component: () => import('../views/Media.vue')
  },
  {
    path: '/events',
    name: 'events',
    component: () => import('../views/Events.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/Contact.vue')
  },
  {
    path: '/donate',
    name: 'donate',
    component: () => import('../views/Donate.vue')
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // If there's a hash in the URL, scroll to that element
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        // Offset for fixed header (adjust according to your header height)
        top: 80
      }
    }
    // Scroll to top for all other route changes
    return { top: 0, behavior: 'smooth' }
  }
})

export default router
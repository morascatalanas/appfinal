import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/info',
    name: 'Info',
    component: () => import( '../views/info.vue')
  },
   {
   path: '/legal',
   name: 'Legal',
   component: () => import( '../views/legal.vue')
   },
   {
   path: '/locations',
   name: 'Locations',
   component: () => import( '../views/locations.vue')
   },
   {
   path: '/registration',
   name: 'Registration',
   component: () => import( '../views/registration.vue')
   }
 ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

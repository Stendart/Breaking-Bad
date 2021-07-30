import Vue from 'vue';
import VueRouter from 'vue-router';
import Title from '../views/Title';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Title',
    component: Title
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/Occupation',
    name: 'Occupation',
    component: () => import('../views/Occupation.vue')
  },
  {
    path: '/detailedInfo',
    name: 'CharactersInformation',
    component: () => import('../views/CharactersInformation.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

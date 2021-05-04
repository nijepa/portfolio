import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  
    children: [
      {
        path: '/aboutme',
        name: 'AboutMe',
        component: () => import(/* webpackChunkName: "aboutme" */ '../views/AboutMe.vue')
      },
      {
        path: '/projects',
        name: 'Projects',
        component: () => import(/* webpackChunkName: "projects" */ '../views/Projects.vue')
      },
      {
        path: '/education',
        name: 'Education',
        component: () => import(/* webpackChunkName: "education" */ '../views/Education.vue')
      },
      {
        path: '/contact',
        name: 'Contact',
        component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue')
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

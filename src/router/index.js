import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import About from '../views/About.vue'
import LogIn from '../views/LogIn.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/LogIn',
    name: 'LogIn',
    component: LogIn
  },
  {
    path: '/About',
    name: 'About',
    component: About
  },
]

const router = new VueRouter({
  routes
})

export default router

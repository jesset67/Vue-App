import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Timer from '../views/Timer.vue'
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
    component: About
  },
  {
    path: '/timer',
    name: 'Timer',
    component: Timer
  },
]

const router = new VueRouter({
  routes
})

export default router

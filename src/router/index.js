import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Timer from '../views/Timer.vue'
import About from '../views/About.vue'

import Feature1 from "../views/Feature1.vue"
import Feature2 from "../views/Feature2.vue"


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
  {
  path: "/feature1",
  name: "Feature 1",
  component: Feature1
  }
]

const router = new VueRouter({
  routes
})

export default router

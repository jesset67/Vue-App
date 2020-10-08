import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Timer from '../views/Timer.vue'
import About from '../views/About.vue'
import TimerAndMessages from '../views/TimerAndMessages.vue'
import messagesInput from '../views/messagesInput.vue'

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
    path: '/timermessages',
    name: 'Timer And Messages',
    component: TimerAndMessages
  },
  {
    path: '/messagesInput',
    name: 'Messages Input',
    component: messagesInput
  }
]

const router = new VueRouter({
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Timer from '../views/Timer.vue'
import About from '../views/About.vue'
import TimerAndMessages from '../views/TimerAndMessages.vue'
import messagesInput from '../views/messagesInput.vue'
import login from '../views/login.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'login',
    component: login
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
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home,
    props: true 
  }
]

const router = new VueRouter({
  routes
})

export default router

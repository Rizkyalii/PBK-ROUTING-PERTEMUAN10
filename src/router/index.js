import { createRouter, createWebHistory } from 'vue-router'
import User from '../components/User.vue'
import StatusBarang from '../components/StatusBarang.vue'
import Home2 from '../components/Home.vue'
import Inbox from '../components/Inbox.vue'
import Settings from '../components/Setting.vue'
import Mail from '../components/Mail.vue'

const routes = [
  { path: '/', name: 'Home', component: Home2 },
  { path: '/User', name: 'User', component: User },
  { path: '/StatusBarang', name: 'StatusBarang', component: StatusBarang },
  { path: '/Inbox', name: 'Inbox', component: Inbox },
  { path: '/Settings', name: 'Setting', component: Settings},
  { path: '/Mail', name: 'Mail', component: Mail}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

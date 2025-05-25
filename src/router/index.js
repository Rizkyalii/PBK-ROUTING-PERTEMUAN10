import {createRouter, createWebHistory} from 'vue-router'
import about from '../views/about.vue'
import admin from '../views/Admin.vue'
import profile from '../views/profile.vue'
import staff from '../views/staff.vue'

const routes = [
    {path: '/', component:admin},
    {path: '/about', component:about},
    {path: '/ListBarang', component:profile},
    {path: '/staff', component:staff},

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
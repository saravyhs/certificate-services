import { createRouter, createWebHistory } from 'vue-router'

//import your components
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import UserDashboard from '@/views/UserDashboard.vue'

const routes = [
    {path: '/', component: Home},
    {path: '/login',  component: Login},
    {path: '/register',  component: Register},
    {path: '/user-dashboard',  component: UserDashboard}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Menu from '../views/Menu.vue'
import Login from '../views/Login.vue'
import MyOrders from '../views/MyOrders.vue'

Vue.use(VueRouter)

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {hideInMenu: false}
  },
  {
    path: '/menu',
    name: 'Carta',
    component: Menu,
    meta: {hideInMenu: false}
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Home,
    meta: {hideInMenu: false}
  },
  {
    path: '/contact',
    name: 'Contacto',
    component: Home,
    meta: {hideInMenu: false}
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {hideInMenu: true}
  },
  {
    path: '/my-orders',
    name: 'Mis pedidos',
    component: MyOrders,
    meta: {hideInMenu: true, private: true}
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach( (to, from, next) => {
  
  const isAuth = localStorage.getItem("jwt-token")
  
  if (to.meta.private === true){
    if (isAuth){
      next()
    }else{
      next("/login")
    }
  }else{
    next()
  }
})
  
export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/account',
    component: () => import(/* webpackChunkName: "account" */ '../views/Account.vue')
  },
  {
    path: '/register',
    component: () => import(/* webpackChunkName: "register" */ '../views/Register.vue')
  },
  {
    path: '/login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/set',
    component: () => import(/* webpackChunkName: "set" */ '../views/Set.vue')
  },
  {
    path: '/message',
    component: () => import(/* webpackChunkName: "message" */ '../views/Message.vue')
  },
  {
    path: '/collect',
    component: () => import(/* webpackChunkName: "collect" */ '../views/Collect.vue')
  },
  {
    path: '/slout',
    component: () => import(/* webpackChunkName: "slout" */ '../views/Slout.vue')
  },
  {
    path: '/me',
    component: () => import(/* webpackChunkName: "me" */ '../views/Me.vue')
  },
  {
    path: '/location',
    component: () => import(/* webpackChunkName: "location" */ '../views/Location.vue')
  }
]

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  routes
})

export default router

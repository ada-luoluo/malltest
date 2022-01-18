// import Vue from 'vue'
// import VueRouter from 'vue-router'

import { createRouter, createWebHistory } from 'vue-router'

const home = () => import('../views/home/Home') //组件首字母要大写 懒加载
const category = () => import('../views/category/Category')
const cart = () => import('../views/cart/Cart')
const profile = () => import('../views/profile/Profile')
const detail =() => import('../views/detail/Detail')


const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: home
  },
  {
    path: '/category',
    component: category
  },
  {
    path: '/cart',
    component: cart
  },
  {
    path: '/profile',
    component: profile
  },
  {
    path: '/detail/:iid',
    component: detail
  },
]

const router = createRouter({
   history: createWebHistory(),
   routes,
})

export default router





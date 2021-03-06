import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [

  {
    path:"",
    redirect:"/home"
  },
  
  {
    path: '/cart',
    name: 'cart',
    component: () => import('views/cart/cart.vue')
  },
  {
    path: '/category',
    name: 'category',
    component: () => import('views/category/category.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('views/home/home.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('views/profile/profile.vue')
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: () => import('views/detail/detail.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

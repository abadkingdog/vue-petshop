import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/components/Index'
import Product from '@/components/Product'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Index
    },
    {
      path: '/product/:id',
      name: 'Product',
      component: Product
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }

    return { x: 0, y: 0 }
  }
})

export default router

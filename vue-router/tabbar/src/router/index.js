import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from "../views/Home/Home.vue"
import Profile from "../views/Profile/Profile.vue"
import ShopChar from "../views/ShopCar/ShopCar.vue"
import Category from "../views/Category/Category.vue"


const router = new Router({
  routes: [
    {
      path: '/home',
      component: Home
    },

    {
      path: '/profile',
      component: Profile
    },

    {
      path: '/shopCar',
      component: ShopChar
    },

    {
      path: '/category',
      component: Category
    },

  ]
,
  mode: "history",
  })

export default router

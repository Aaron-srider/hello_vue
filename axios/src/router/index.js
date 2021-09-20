import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

const TestAxios = () => import("../components/TestAxios.vue")

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TestAxios',
      component: TestAxios
    }
  ]
})

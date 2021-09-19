import Vue from 'vue'
import Router from 'vue-router'

const Counter = () => import("../components/Counter.vue")
const Viewer = () => import("../components/Viewer.vue")

Vue.use(Router)

export default new Router({
    routes: [
      {
        path: '/counter',
        component: Counter
      },
      {
        path: '/viewer',
        component: Viewer
      },

    ],
    mode: "history"
  }
)

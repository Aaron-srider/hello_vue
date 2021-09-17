import VueRouter from 'vue-router'
import Vue from 'vue'

const HelloWorld = () => import("../components/HelloWorld.vue")
const About = () => import("../components/About.vue")
const User = () => import("../components/User.vue")
const Home = () => import("../components/Home.vue")
const Profile = () => import("../components/Profile.vue")
const HomeMessage = () => import("../components/HomeMessage.vue")
const HomeDetailInfo = () => import("../components/HomeDetailInfo.vue")

Vue.use(VueRouter)

const routes = [
  {
    path: "",
    redirect: "/helloWorld",
    meta: {
      title: "helloWorld"
    }
  },
  {
    path: "/about",
    component: About,
    meta: {
      title: "about"
    }
  },
  {
    path: "/user/:userName",
    component: User,
    meta: {
      title: "user"
    }
  },
  {
    path: "/profile",
    component: Profile,
    meta: {
      title: "profile"
    }
  },
  {
    path: "/home",
    component: Home,
    beforeEnter: (to, from, next) => {
      next()
      console.log("home-route-guard from", from.path)
      console.log("home-route-guard to", to.path)
    },
    children: [
      {
        path: "",
        redirect: "message"
      },
      {
        path: "message",
        component: HomeMessage,
        beforeEnter: (to, from, next) => {
          next()
          console.log("message-route-guard from", from.path)
          console.log("message-route-guard to", to.path)
        },
      },
      {
        path: "detailInfo",
        component: HomeDetailInfo
      }
    ],
    meta: {
      title: "home"
    }
  }
]


let router = new VueRouter({
  routes,
  mode: "history",
  linkActiveClass: "active"
})

router.beforeEach((to, from, next) => {
  next()
  document.title=to.meta.title
  console.log("global-guard from", from.path)
  console.log("global-guard to", to.path)
  document.title = to.matched[0].meta.title
})

export default router

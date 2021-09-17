import VueRouter from 'vue-router'
import Vue from 'vue'

import HelloWorld from "../components/HelloWorld.vue"
import About from "../components/About.vue"
import User from "../components/User.vue"

Vue.use(VueRouter)

const routes =[
    {
        path:"",
        redirect:"/helloWorld"
    },
    {
        path:"/helloWorld",
        component: HelloWorld
    },
    {
        path:"/about",
        component: About
    },
    {
        path:"/user/:name",
        component: User
    }
]


let router  = new VueRouter({
    routes,
    mode:"history",
    linkActiveClass:"active"
})

export default router

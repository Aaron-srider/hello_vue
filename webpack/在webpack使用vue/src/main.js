require("./css/testcss.css")

import Vue from "vue"
import Comp from "./vue/Comp.vue"



new Vue({
    el: "#app",
    template: `<Comp/>`,
    render(h){
        return h(Comp)
    }
})

document.write("<h1>hello vue</h1>")
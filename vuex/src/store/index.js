import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const vuex = new Vuex.  Store({
  state: {
    counter: 10000
  },mutations:{
    counterAdd(state) {
      state.counter++;
    },
    counterMinus(state) {
      state.counter--;
    }
  }

})

export default vuex

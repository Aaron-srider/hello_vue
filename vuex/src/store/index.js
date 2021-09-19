import Vue from "vue"
import Vuex from "vuex"
import * as types from "./types.js"

Vue.use(Vuex)

const vuex = new Vuex.Store({
  state: {
    counter: 10000,
    students: [
      {name: "wc", age: 14},
      {name: "jack", age: 15},
      {name: "john", age: 16},
      {name: "cc", age: 19},
    ]
  }, mutations: {
    [types.COUNTERADD](state, payload) {
      console.log(payload.n)
      state.counter += payload.n;
    },
    [types.COUNTERMINUS](state, payload) {
      state.counter -= payload.n;
    }
  }, actions: {
    increment({commit}, payload) {
      var a = 0
      console.log(payload.n)
      setTimeout(() => {
        a = 9
        commit({
          type: types.COUNTERADD,
          n: a
        })
      }, 1000)
    }
  },
  getters: {
    filterStudents(state) {
      return function (age) {
        return state.students.filter(student => student.age >= age)
      }
    },
    filterStudentsLength(state, getters) {
      return function (age) {
        return getters.filterStudents(age).length
      }
    }
  }

})

export default vuex

import Vue from "vue"
import Vuex from "vuex"

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
    counterAdd(state) {
      state.counter++;
    },
    counterMinus(state) {
      state.counter--;
    }
  },
  getters: {
    powerCount(state) {
      return state.counter * state.counter
    },

    filterStudents(state) {
      return function (age) {
        return state.students.filter(student => student.age >= age)
      }
    }

    ,
    filterStudentsLength(state, getters) {
      return function (age) {
        return getters.filterStudents(age).length
      }
    }
  }

})

export default vuex

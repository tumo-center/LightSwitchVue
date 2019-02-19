import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    on: false
  },
  mutations: {
    toggle(state) {
      state.on = !state.on;
    }
  },
  actions: {
  }
})

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isStarted: false
  },
  mutations: {
    setStarted(state, isStarted) {
      state.isStarted = isStarted;
    },
  },
  actions: {
    setIsStarted({ commit }, isStarted) {
      commit('setStarted', isStarted);
    },
  },
  getters: {
    isStarted: (state) => state.isStarted,
  }
})

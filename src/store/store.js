// store.js
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  // 상태
  state: {
    selectedValue: 1
  },
  getters: {
    selectedValue: ({selectedValue}) => {
      return selectedValue
    }
  },
  mutations: {
    setSelectedValue (state, payload) {
      Vue.set(state, 'selectedValue', payload)
    }
  },
  actions: {
    setSelectedValue (context, payload) {
      context.commit('setSelectedValue', Number(payload));
    }
  }
});
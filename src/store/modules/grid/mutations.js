import Vue from 'vue'

// mutations.js
export default {
  setSelectedValue (state, payload) {
    Vue.set(state, 'selectedValue', payload)
  }
}
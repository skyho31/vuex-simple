import Vue from 'vue'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

// grid.js
export default { 
  // 상태
  state: {
    selectedValue: 1
  },
  getters,
  mutations,
  actions,
}


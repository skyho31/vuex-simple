// actions.js

export default {
  // state는 지역상태
  // rootState는 전역상태
  setSelectedValue ({ state, commit, rootState }, payload) {
    commit('setSelectedValue', Number(payload));
  }
}

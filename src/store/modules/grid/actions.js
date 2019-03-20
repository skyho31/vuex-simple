// actions.js

export default {
  /**
   * state는 지역상태
   * rootState는 전역상태
   * 보통은 commit만 쓰면 되요.
   * dispatch는 다른 actions을 실행할 때 사용합니다. 
   * async await도 되어요
   */

  setSelectedValue ({ state, commit, rootState, dispatch }, payload) {
    dispatch('alertSelectedValue', payload)
    commit('setSelectedValue', Number(payload));
  },
  alertSelectedValue ({state}, payload) {
    const prev = state.selectedValue
    alert(`${prev}값이 ${payload}값으로 변경되었습니다.`)
  }
}

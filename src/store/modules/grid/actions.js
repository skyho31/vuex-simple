// actions.js

export default {
  setSelectedValue (context, payload) {
    context.commit('setSelectedValue', Number(payload));
  }
}

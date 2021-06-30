
const state = {
  header_color:'#333',
}

const mutations = {
  SET_COLOR: (state, data) => {
    state.header_color = data;
  },
}
const actions = {
  
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
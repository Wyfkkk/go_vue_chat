const state = { email: "", token: "" };
const mutations = {
  [types.LOGIN]: (state, value) => {
    state.token = value;
  },
  [types.USERINFO]: (state, info) => {
    state.userInfo = info;
  },
};
const actions = {};
const getters = {};
export default {
  state,
  mutations,
  actions,
  getters,
};

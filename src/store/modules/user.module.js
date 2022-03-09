import axiosClient from "../../axios";

/*state initialization */
const initialState = {
  user: {},
  token: sessionStorage.getItem("TOKEN"),
};

export const state = { ...initialState };

/*list of all actions methods(functions) using the async and await principle */
const actions = {
  register({ commit }, user) {
    return axiosClient.post("/user/create", user).then(({ data }) => {
      commit("setUser", data.data);
      return data.data;
    });
  },
  login({ commit }, user) {
    return axiosClient.post("/user/login", user).then(({ data }) => {
      commit("setUser", data.data);
      return data.data;
    });
  },
  logout({ commit }) {
    return axiosClient.get("/user/logout").then(({ data }) => {
      commit("logout");
      return data;
    });
  },
};

/*exporting the mutation*/
export const mutations = {
  logout: (state) => {
    state.user = {};
    state.token = null;
    sessionStorage.clear();
  },
  setUser: (state, userData) => {
    console.log("dd", userData);
    state.token = userData.token;
    state.user = userData;
    sessionStorage.setItem("TOKEN", userData.token);
  },
};
/* setting the getters*/
const getters = {
  user(state) {
    return state.user;
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};

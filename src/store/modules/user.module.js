import axiosClient from "../../axios";
import { LOGOUT_USER, SET_USER, SET_USER_TOKEN } from "../mutation-types";

/*state initialization */
const initialState = {
  user: {},
  token: localStorage.getItem("TOKEN"),
};

export const state = { ...initialState };

/*list of all actions methods(functions) using the async and await principle */
const actions = {
  register({ commit }, user) {
    return axiosClient.post("/user/create", user).then(({ data }) => {
      commit(SET_USER, data.data);
      commit(SET_USER_TOKEN, data.data.token);
      return data.data;
    });
  },
  login({ commit }, user) {
    return axiosClient.post("/user/login", user).then(({ data }) => {
      commit(SET_USER_TOKEN, data.data.token);
      return data.data;
    });
  },
  getUser({ commit }) {
    return axiosClient.get("/user").then(({ data }) => {
      commit(SET_USER, data.data);
      return data.data;
    });
  },
  logout({ commit }) {
    return axiosClient.get("/user/logout").then(({ data }) => {
      commit(LOGOUT_USER);
      return data;
    });
  },
};

/*exporting the mutation*/
export const mutations = {
  logoutUser: (state) => {
    state.user = {};
    state.token = null;
    localStorage.clear();
  },
  setUser: (state, userData) => {
    state.user = userData;
  },
  setUserToken: (state, data) => {
    state.token = data;
    localStorage.setItem("TOKEN", data);
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

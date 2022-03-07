import axiosClient from "../../axios";

/*state initialization */
const initialState = {
  user: {
    data: {},
    token: "123", //sessionStorage.getItem("TOKEN")
  },
};

export const state = { ...initialState };

/*list of all actions methods(functions) using the async and await principle */
const actions = {
  register({ commit }, user) {
    return axiosClient.post("/user/create", user).then(({ data }) => {
      commit("setUser", data);
      return data;
    });
  },
  login({ commit }, user) {
    return axiosClient.post("/user/login", user).then(({ data }) => {
      commit("setUser", data);
      return data;
    });
  },
  logout({ commit }) {
    return axiosClient.post("/user/logout").then(({ data }) => {
      commit("logout");
      return data;
    });
  },
};

/*exporting the mutation*/
export const mutations = {
  logout: (state) => {
    state.user.data = {};
    state.user.token = null;
    sessionStorage.clear();
  },
  setUser: (state, userData) => {
    state.user.token = userData.token;
    state.user.data = userData.user;
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
  state,
  actions,
  mutations,
  getters,
};

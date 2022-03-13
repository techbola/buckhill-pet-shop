import axiosClient from "../../axios";
import { SET_CATEGORIES } from "../mutation-types";

/*state initialization */
const initialState = {
  category: {},
  categories: [],
};

export const state = { ...initialState };

/*list of all actions methods(functions) using the async and await principle */
const actions = {
  getCategories({ commit }) {
    return axiosClient.get("/categories").then(({ data }) => {
      commit(SET_CATEGORIES, data);
      return data;
    });
  },
};

/*exporting the mutation*/
export const mutations = {
  setCategories: (state, categories) => {
    state.categories = categories;
  },
};
/* setting the getters*/
const getters = {
  categories(state) {
    return state.categories;
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};

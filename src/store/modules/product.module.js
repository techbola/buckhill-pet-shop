import axiosClient from "../../axios";

/*state initialization */
const initialState = {
  product: {},
  products: [],
};

export const state = { ...initialState };

/*list of all actions methods(functions) using the async and await principle */
const actions = {
  getProducts({ commit }) {
    return axiosClient.get("/products").then(({ data }) => {
      commit("setProducts", data.data);
      return data.data;
    });
  },
};

/*exporting the mutation*/
export const mutations = {
  setProducts: (state, products) => {
    state.products = products;
  },
};
/* setting the getters*/
const getters = {
  products(state) {
    return state.products;
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};

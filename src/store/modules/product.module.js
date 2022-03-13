import axiosClient from "../../axios";
import { SET_PRODUCT, SET_PRODUCTS } from "../mutation-types";

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
      commit(SET_PRODUCTS, data.data);
      return data.data;
    });
  },
  getProduct({ commit }, productId) {
    return axiosClient.get(`/product/${productId}`).then(({ data }) => {
      commit(SET_PRODUCT, data.data);
      return data.data;
    });
  },
};

/*exporting the mutation*/
export const mutations = {
  setProducts: (state, products) => {
    state.products = products;
  },
  setProduct: (state, product) => {
    state.product = product;
  },
};
/* setting the getters*/
const getters = {
  products(state) {
    return state.products;
  },
  product(state) {
    return state.product;
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};

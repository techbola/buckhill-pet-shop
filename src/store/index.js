import Vue from "vue";
import Vuex from "vuex";

import user from "./modules/user.module";

Vue.use(Vuex);

const modules = {
  user,
};

export default new Vuex.Store({
  modules,
  // state: {
  // },
  // mutations: {
  // },
  // actions: {
  // },
  // modules: {
  // }
});

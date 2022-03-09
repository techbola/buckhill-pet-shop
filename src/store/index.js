import Vue from "vue";
import Vuex from "vuex";

import user from "./modules/user.module";
import category from "./modules/category.module";
import product from "./modules/product.module";
import file from "./modules/file.module";

Vue.use(Vuex);

const modules = {
  user,
  category,
  product,
  file,
};

export default new Vuex.Store({
  modules,
});

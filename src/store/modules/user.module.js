/*state initialization */
const initialState = {
  user: {
    data: {},
    token: sessionStorage.getItem("TOKEN"),
  },
};

export const state = { ...initialState };

/*list of all actions methods(functions) using the async and await principle */
const actions = {};

/*exporting the mutation*/
export const mutations = {};
/* setting the getters*/
const getters = {};

export default {
  state,
  actions,
  mutations,
  getters,
};

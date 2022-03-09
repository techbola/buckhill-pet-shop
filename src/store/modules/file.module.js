import axiosClient from "../../axios";

/*state initialization */
const initialState = {
  file: "",
};

export const state = { ...initialState };

/*list of all actions methods(functions) using the async and await principle */
const actions = {
  getFile({ commit }, fileId) {
    return axiosClient.get(`/file/${fileId}`).then(({ data }) => {
      return data.blob().then((blobResponse) => {
        console.log(blobResponse);
        commit("setFile", blobResponse);
        return blobResponse;
      });
    });
  },
};

/*exporting the mutation*/
export const mutations = {
  setFile: (state, file) => {
    state.products = file;
  },
};
/* setting the getters*/
const getters = {
  file(state) {
    return state.file;
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};

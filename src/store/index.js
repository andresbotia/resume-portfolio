import { createStore } from "vuex";

export default createStore({
  state: {
    lightMode: true,
  },
  mutations: {},
  actions: {},
  getters: {
    isLightModeOn: function (state) {
      return `${state.lightMode}`;
    },
  },
});

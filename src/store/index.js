import { createStore } from "vuex";

export default createStore({
  state: {
    lightMode: true,
    cardList: [
      { id: 1, name: "dummyname1", date: "Nov 04, 2021" },
      { id: 2, name: "dummyname2" },
      { id: 3, name: "dummyname3" },
      { id: 4, name: "dummyname4" },
      { id: 5, name: "dummyname5" },
      { id: 6, name: "dummyname6" },
    ],
  },
  mutations: {},
  actions: {},
  getters: {
    isLightModeOn: function (state) {
      return `${state.lightMode}`;
    },
    getCardListData: function (state) {
      let cardDataJson = JSON.parse(JSON.stringify(state.cardList));
      return cardDataJson;
    },
  },
});

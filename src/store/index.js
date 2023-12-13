import { createStore } from "vuex";

export default createStore({
  state: {
    lightMode: true,
    cardList: [
      { id: 1, name: "dummyname1", date: "Nov 04, 2021" },
      { id: 2, name: "dummyname2" },
      {
        id: 3,
        name: "Distantly Near",
        date: "Dec 06, 2021",
        TechStack: "MERN (MongoDB, Express.js , React.js, Node.js )",
        tags: "Front End (UI), Back End (MongoDB)",
        logoSrc: "data:,",
        description: "MERN Stack social media application",
        createdFor: "FAU Principles of Software Engineering Class",
        siteAddress: "(No longer active due to Heroku Hosting)",
        objective:
          "Create a site to allow user’s to be able to connect with their friends through social distancing. Distantly-Near allows individuals to connect by adding each other, sharing posts, and engaging with each other by liking posts.",
        challenge: `Our main motivation was to create a project not only that could pass the final project guidelines, but a project in which we were able to learn and actively work on real world applications such as MongoDB, Postman, React.js, Node.js, Express.js.`,
        challenge2: `Functionalities included: Create an account, login, share post, interact with like button, search bar for friends, follow button, friends list.`,
        challenge3: `Our Target Audience was to reach individuals affected by the pandemic and social distancing. This application allows them to interact with each other.`,
        hasImage2: true,
        hasImage3: true,
        hasImage4: false,
      },
      { id: 4, name: "dummyname3" },
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

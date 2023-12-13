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
      {
        id: 4,
        name: "Photography Portfolio",
        date: "Dec 26, 2020",
        TechStack: "JS, HTML, CSS, SCSS",
        tags: "Front End (UI)",
        description: "A personal photography portfolio",
        createdFor: "showcase photography taken by me over the years",
        siteAddress: "https://andres-photography-portfolio.netlify.app/",
        objective:
          "Create a site to display my personal photography and start my hands on experience in web development. This was one of my very first personal projects and it's built using basic html and JavaScript mixed with css",
        challenge: `Welcome to my Photography Portfolio!

        📸. This was the start where I merge my budding web development skills with my love for photography. This digital showcase is not just a testament to my initial foray into web development but also a visual journey through my camera lens.`,
        challenge2: `🖥️ This site was created using HTML and JavaScript, this portfolio is a reflection of my commitment to honing my technical abilities. Every click, scroll, and transition is a testament to the fusion of art and code.

        🌟 Immerse yourself in the carefully curated collection of my photographic endeavors. From the ethereal landscapes to the candid portraits, each image tells a unique story. The minimalist design ensures that the focus remains on the visuals, allowing the photographs to speak for themselves.`,
        challenge3: `
        📌 As I continue to develop both my coding skills and photographic eye, this portfolio serves as a snapshot of my journey. I invite you to navigate through this virtual gallery, where pixels meet passion, and technology dances with art. Your presence here is not just a visit; it's a glimpse into the evolution of a photographer and a web developer in the making.
        
        Thank you for stepping into my digital realm. Enjoy the visual voyage! PS: This was written using chatgpt`,
        hasImage2: true,
        hasImage3: true,
        hasImage4: false,
        hyperLinkSite: true,
      },
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

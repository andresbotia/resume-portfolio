import { createStore } from "vuex";

export default createStore({
  state: {
    lightMode: true,
    cardList: [
      {
        id: 1,
        name: "HabitHub",
        date: "Dec 16, 2023",
        TechStack: "Figma",
        tags: "UI/UX",
        description:
          "Embrace Positive Change with HabitHut: A Dark Mode, Minimalist Habit Tracker",
        createdFor:
          "showcasing figma UI/UX design for a minimalistic UI application",
        objective:
          "HabitHut aims to transform the process of habit tracking into a pleasurable and stylish journey, encouraging users to embrace and celebrate their daily wins in a space that feels like a digital retreat. The ultimate goal is to inspire and support users in building better habits with intentionality and flair.",
        challenge: `Venture into the world of HabitHut—an immersive Figma design for a habit tracker app that's more than just a tool; it's a sleek, cozy retreat for your daily wins. 🌟`,
        challenge2: `HabitHut is more than checkboxes; it's about crafting a lifestyle within a minimalist, visually stunning space. From sleek interfaces to effortless navigation, every element is meticulously designed to make tracking habits a pleasure in the shadows.`,
        challenge3: `
        The app's layout is structured to provide a seamless navigation experience, ensuring that users can effortlessly input, track, and celebrate their daily wins...`,
        challenge4: `
        So, whether you're striving to build new habits or break old ones, HabitHut is designed to be your trusted companion on this journey. With this Figma design, I aimed to capture the essence of a cozy retreat, where habits aren't just tracked—they're embraced and celebrated in a space that feels like home. Welcome to HabitHut, where positive change feels like coming home.`,
        hasImage2: true,
        hasImage3: true,
        hasImage4: false,
        hyperLinkSite: false,
        hasPngLogo: true,
      },
      {
        id: 2,
        name: "Google Chrome Extension",
        date: "Dec 14, 2023",
        TechStack: "Chrome Extension, JS, HTML",
        tags: "Front End (UI), Browser Extension",
        description:
          "Google Chrome Extension that shows the estimated revenue for individual tweets",
        createdFor:
          "personal project, wanted to learn and experiment on chrome extensions",
        siteAddressName: "Twitter Revenue Chrome Extension",
        siteAddress:
          "https://github.com/andresbotia/TwitterRevenueChromeExtension",
        objective: "Create a google chrome extension that changes twitters UI",
        challenge: `Ever wonder if your tweets are worth more than just likes and views? In the above images you can see a Tweet from Elon Musk one shows the revenue that tweet could potentially make another shows twitters view count`,
        challenge2: `This Google Chrome Extension changes the views button on a tweet to show the estimated revenue the user made from that specific tweet.
        According to Twitter( X? nobody really calls it that lets be honest), A user needs to pass three cases to become eligible for revenue`,
        challenge3: `I wanted to figure out how much a tweet "Could" make per its views. According to CalculateBuddy, there is a rough estimation formula we can use for this which is:`,
        challenge4: `We can receive a tweets number of views(impressions) and use the formula to calculate the potential of revenue received per that individual tweet`,
        list: [
          "1. Be subscribed to X Premium or Verified Organizations.",
          "2. Have at least 5M organic impressions on your cumulative posts within the last 3 months.",
          "3. Have at least 500 followers",
        ],
        hasImage2: true,
        hasImage3: true,
        hasImage4: false,
        hyperLinkSite: true,
        showFormula: true,
        showList: true,
        formula: "AdRevenue = 0.0000085 x Number of Impressions",
        hasPngLogo: true,
      },
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
        website: true,
      },
      {
        id: 4,
        name: "Photography Portfolio",
        date: "Dec 26, 2020",
        TechStack: "JS, HTML, CSS, SCSS",
        tags: "Front End (UI)",
        description: "A personal photography portfolio",
        createdFor: "showcasing photography taken by me over the years",
        website: true,
        siteAddressName: "andres-photography-portfolio",
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
      {
        id: 5,
        name: "Coming Soon....",
        description:
          "A project based on the Astro framework, the web framework for content-driven websites",
        disabled: true,
      },
      { id: 6, name: "Coming Soon....", disabled: true },
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

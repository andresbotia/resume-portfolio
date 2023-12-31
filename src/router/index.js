import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/LandingPage.vue";
import About from "../views/AboutPage.vue";
import Projects from "../views/ProjectsPage.vue";
import Contact from "../views/ContactPage.vue";
import Details from "../views/projectDetails.vue";
import Error from "../views/ErrorPage.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/projects/:id",
    name: "Details",
    component: Details,
  },
  { name: "Error", path: "/:pathMatch(.*)*", component: Error },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

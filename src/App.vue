<template>
  <appHeader />
  <router-view />
  <appFooter />
</template>

<script>
import "@mdi/font/css/materialdesignicons.css";
import appHeader from "../src/components/shared/appHeader.vue";
import appFooter from "../src/components/shared/appFooter.vue";
import { useTheme } from "vuetify";
export default {
  name: "App",
  components: {
    appHeader,
    appFooter,
  },
  data: function () {
    return { theme: useTheme() };
  },
  created() {
    this.$store.state.lightMode = !this.$store.state.lightMode;
    this.theme.global.name = this.theme.global.current.dark ? "light" : "dark";
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
html,
body {
  max-width: 100%;
  overflow-x: hidden;
}
</style>

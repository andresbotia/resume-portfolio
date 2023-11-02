<template>
  <appHeader />
  <router-view />
</template>

<script>
import "@mdi/font/css/materialdesignicons.css";
import appHeader from "../src/components/shared/appHeader.vue";
export default {
  name: "App",
  components: {
    appHeader,
  },
  data: function () {
    return {};
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
</style>

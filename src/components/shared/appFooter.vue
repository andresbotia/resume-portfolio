<template>
  <div class="col-12 d-flex flex-column justify-center pt-10">
    <h1>Follow Me</h1>
    <div>
      <v-btn
        href="https://www.linkedin.com/in/andres-botia/"
        target="_blank"
        variant="outlined"
        class="ma-2"
        icon="mdi-linkedin"
      ></v-btn>
      <v-btn
        href="https://github.com/andresbotia"
        target="_blank"
        variant="outlined"
        class="ma-2"
        icon="mdi-github"
      ></v-btn>
    </div>
  </div>
  <v-layout>
    <v-footer absolute class="d-flex justify-center">
      <p>
        © 2023.
        <span class="font-weight-bold">Vue.js & Vuetify Portfolio </span>.
        Developed by
        <span class="font-weight-bold">Andres Botia</span>
      </p></v-footer
    >
  </v-layout>
</template>

<script>
export default {
  data: () => ({}),
  computed: {
    cols() {
      const { xs } = this.$vuetify.display;
      return xs ? [1] : [2];
    },
    isLightModeOn() {
      return this.$store.state.lightMode;
    },
  },
  methods: {},
};
</script>

<style></style>

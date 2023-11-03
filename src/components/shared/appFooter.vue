<template>
  <v-layout>
    <v-footer absolute class="d-flex justify-center"
      ><p>
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

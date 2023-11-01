<template>
  <v-row no-gutters>
    <v-col cols="2" class="home-page-logo">
      <h4 @click="$router.push('/')">{{ logoName }}</h4>
    </v-col>
    <v-col>
      <v-tabs color="blue-darken-1" align-tabs="center">
        <v-tab
          to="/projects"
          router
          :exact="true"
          :selected-class="
            this.$route.name === 'Projects'
              ? 'v-tab--selected'
              : 'inactive-nav-tab'
          "
          >Projects</v-tab
        >
        <v-tab
          to="/about"
          router
          :exact="true"
          :selected-class="
            this.$route.name === 'About'
              ? 'v-tab--selected'
              : 'inactive-nav-tab'
          "
          >About Me</v-tab
        >
        <v-tab
          to="/contact"
          router
          :exact="true"
          :selected-class="
            this.$route.name === 'Contact'
              ? 'v-tab--selected'
              : 'inactive-nav-tab'
          "
          >Contact</v-tab
        >
      </v-tabs>
    </v-col>
    <v-col cols="2" class="home-page-dark-mode-toggle"> todo </v-col>
  </v-row>
  <v-spacer></v-spacer>
</template>

<script>
export default {
  data: () => ({
    tab: null,
    logoName: "< Andres Botia />",
  }),
};
</script>

<style>
.inactive-nav-tab {
  color: #2c3e50;
}
.home-page-logo,
.home-page-dark-mode-toggle {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

<template>
  <v-row no-gutters>
    <v-col cols="2" class="home-page-logo d-none d-sm-flex ml-2">
      <h4 @click="$router.push('/')">{{ logoName }}</h4>
    </v-col>
    <v-col class="d-none d-sm-flex justify-center">
      <v-tabs
        :class="isLightModeOn ? 'grey-darken-3' : 'grey-lighten-4'"
        align-tabs="center"
      >
        <v-tab
          to="/projects"
          router
          :exact="true"
          :selected-class="
            this.$route.name === 'Projects' || this.$route.name === 'Details'
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
    <v-col cols="2" class="home-page-dark-mode-toggle d-none d-sm-flex">
      <v-icon
        v-if="$store.state.lightMode"
        icon="mdi-moon-waning-crescent"
        @click="toggleTheme"
      ></v-icon>

      <v-icon v-else icon="mdi-lightbulb" @click="toggleTheme"></v-icon>
    </v-col>

    <v-col cols="6" class="home-page-logo ml-2 d-flex d-sm-none align-center">
      <h4 @click="$router.push('/')">{{ logoName }}</h4>
    </v-col>
    <v-col class="d-flex d-sm-none justify-end align-center">
      <v-icon
        v-if="$store.state.lightMode"
        icon="mdi-moon-waning-crescent"
        @click="toggleTheme"
      ></v-icon>

      <v-icon v-else icon="mdi-lightbulb" @click="toggleTheme"></v-icon>
    </v-col>
    <v-col class="d-flex d-sm-none justify-end mr-2 align-center">
      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn
            icon="mdi-menu"
            v-bind="props"
            size="small"
            variant="outlined"
          ></v-btn>
        </template>

        <v-list>
          <v-list-item v-for="(item, i) in items" :key="i">
            <v-list-item-title @click="menuClickHandle(item)">{{
              item.title
            }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-col>
  </v-row>
</template>

<script>
import { useTheme } from "vuetify";
export default {
  data: () => ({
    tab: null,
    logoName: "< Andres Botia / >",
    drawer: false,
    items: [
      { title: "Projects", route: "Projects" },
      { title: "About Me", route: "About" },
      { title: "Contact", route: "Contact" },
    ],
    theme: useTheme(),
  }),
  computed: {
    cols() {
      const { xs } = this.$vuetify.display;
      return xs ? [1] : [2];
    },
    isLightModeOn() {
      return this.$store.state.lightMode;
    },
  },
  methods: {
    toggleTheme() {
      console.log(this.theme.global.name);
      this.$store.state.lightMode = !this.$store.state.lightMode;
      this.theme.global.name = this.theme.global.current.dark
        ? "light"
        : "dark";
    },
    menuClickHandle(itemClicked) {
      this.$router.push({ name: itemClicked.route });
    },
  },
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

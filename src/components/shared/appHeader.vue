<template>
  <v-row no-gutters>
    <v-col cols="2" class="home-page-logo d-none d-sm-flex ml-2">
      <h4 @click="$router.push('/')">{{ logoName }}</h4>
    </v-col>
    <v-col class="d-none d-sm-flex justify-center">
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
    <v-col cols="2" class="home-page-dark-mode-toggle d-none d-sm-flex">
      todo
    </v-col>

    <v-col cols="4" class="home-page-logo ml-2 d-flex d-sm-none">
      <h4 @click="$router.push('/')">{{ logoName }}</h4>
    </v-col>
    <v-col class="d-flex d-sm-none justify-end"> todo </v-col>
    <v-col class="d-flex d-sm-none justify-end mr-2">
      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn icon="mdi-menu" v-bind="props" size="small"></v-btn>
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
export default {
  data: () => ({
    tab: null,
    logoName: "< Andres Botia />",
    drawer: false,
    items: [
      { title: "Projects", route: "Projects" },
      { title: "About Me", route: "About" },
      { title: "Contact", route: "Contact" },
    ],
  }),
  computed: {
    cols() {
      const { xs } = this.$vuetify.display;
      return xs ? [1] : [2];
    },
  },
  methods: {
    menuClickHandle(itemClicked) {
      this.$router.push({ path: itemClicked.route });
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

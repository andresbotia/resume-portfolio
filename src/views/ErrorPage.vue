<template>
  <v-container class="pt-10">
    <v-row class="mb-6" no-gutters>
      <v-col :cols="cols[0]" class="landing-message">
        <div>
          <v-alert
            outlined
            title="404"
            text="Looks like this page doesnt exist, please use the button below to go back to the home page or use the navigation buttons above"
            type="warning"
          ></v-alert>
          <v-btn variant="outlined" class="mt-4" @click="rerouteToHome">
            Home Page
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ErrorPage",
  data: function () {
    return {};
  },
  computed: {
    cols() {
      const { xs } = this.$vuetify.display;
      return xs ? [12] : [3];
    },
    cols2() {
      const { xs } = this.$vuetify.display;
      return xs ? [12] : [9];
    },
    isLightModeOn() {
      return this.$store.state.lightMode;
    },
  },
  methods: {
    rerouteToHome() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.avatar-photo {
  border-radius: 0.5rem;
  max-width: 100%;
  height: auto;
}
</style>

<template>
  <v-container>
    <v-row no-gutters>
      <v-col cols="6" class="landing-message">
        <div>
          <h1>Hi, I am Andres Botia</h1>
          <p class="mb-5">A Front-end Developer &amp; Design Enthusiast</p>
          <v-btn variant="outlined" @click="downloadPdf">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="black"
              class="ml-0 mr-2"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="8 12 12 16 16 12"></polyline>
              <line x1="12" y1="8" x2="12" y2="16"></line>
            </svg>
            Download Resume
          </v-btn>
        </div>
      </v-col>
      <v-col cols="6" class="landing-svg">
        <div>test svg goes yhere</div>
      </v-col>
    </v-row>
  </v-container>
  <v-spacer></v-spacer>
  <v-container>
    <v-row no-gutters>
      <v-col cols="12">
        <v-divider :thickness="20" color="error"></v-divider>
        <projects />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import projects from "../views/ProjectsPage.vue";
export default {
  name: "landingPage",
  components: {
    projects,
  },
  data: function () {
    return {};
  },
  methods: {
    downloadPdf() {
      // TODO Finish this
    },
  },
};
</script>

<style scoped>
.landing-message,
.landing-svg {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100dvh;
}
</style>

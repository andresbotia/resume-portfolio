<template>
  <v-container>
    <v-row class="mb-6" no-gutters>
      <v-col :cols="cols[0]" class="landing-message">
        <div>
          <h1>Hi, I am Andres Botia</h1>
          <p class="mb-5">A Front-end Developer &amp; Design Enthusiast</p>
          <a href="/resume.pdf" download="" aria-label="Download Resume"
            ><v-btn variant="outlined download-resume-button">
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
            </v-btn></a
          >
        </div>
      </v-col>
      <v-col :cols="cols[0]" class="landing-svg">
        <img
          src="../assets/front-end-dev.svg"
          class="svg-dev-container"
          alt="Light Logo"
        />
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
  computed: {
    cols() {
      const { lg, xs } = this.$vuetify.display;
      return lg ? [6, 6] : xs ? [12, 12] : [6, 6];
    },
  },
  methods: {
    downloadPdf(pdfUrl) {
      const link = document.createElement("a");
      link.href = pdfUrl;
      link.target = "_blank";
      link.download = "andresbotia-resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
    dwadwadownloadPdf() {
      // TODO Finish this
      window.open("../assets/resume.pdf");
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
.download-resume-button {
  color: #2c3e50;
}
.download-tag {
  color: #2c3e50;
  text-decoration: none;
}
.svg-dev-container {
  max-width: 100%;
  height: auto;
}
</style>

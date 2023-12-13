<template>
  <v-container class="pt-10" v-show="showLoader">
    <v-row class="mb-6 justify-center" no-gutters>
      <v-progress-circular
        indeterminate
        :color="isLightModeOn ? 'black' : 'white'"
        :size="64"
      ></v-progress-circular>
    </v-row>
  </v-container>
  <v-container class="pt-10 ml-4" v-show="!showLoader">
    <v-row class="mb-4" no-gutters>
      <div>
        <h1>{{ projectInfo.name }}</h1>
      </div>
    </v-row>
    <v-row class="mb-6" no-gutters>
      <div class="d-inline-flex">
        <v-icon icon="mdi-clock"></v-icon>
        <p class="ml-2">{{ projectInfo.date }}</p>

        <v-icon class="ml-8" icon="mdi-tag"></v-icon>
        <p class="ml-2">{{ projectInfo.tags }}</p>
      </div>
    </v-row>
    <v-row class="mb-6" no-gutters>
      <div class="d-inline-flex">
        <v-img
          :width="250"
          aspect-ratio="1/1"
          cover
          class="showcase-images"
          :src="getImgUrl(projectInfo.id)"
        ></v-img>
        <v-img
          :width="250"
          aspect-ratio="1/1"
          cover
          class="showcase-images"
          src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
        ></v-img>
        <v-img
          :width="250"
          aspect-ratio="1/1"
          cover
          class="showcase-images"
          src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
        ></v-img>
      </div>
    </v-row>
    <v-row class="mb-6" no-gutters>
      <v-col :cols="cols[0]" class="landing-message">
        <div class="d-flex">
          <h4>About Project</h4>
        </div>
        <div class="about-section">
          <p>Name: {{ projectInfo.name }}</p>
          <p>Website: {{ projectInfo.siteAddress }}</p>
          <p>Created for: {{ projectInfo.createdFor }}</p>
        </div>
        <div class="d-flex mt-4">
          <h4>Objective</h4>
        </div>
        <div class="about-section">
          <p>
            {{ projectInfo.objective }}
          </p>
        </div>
        <div class="d-flex mt-4">
          <h4>Tools & Technologies</h4>
        </div>
        <div class="about-section">
          <p>{{ projectInfo.TechStack }}</p>
        </div>
      </v-col>
      <v-col :cols="cols2[0]" class="landing-svg">
        <v-sheet
          width="90%"
          min-height="20rem"
          :class="isLightModeOn ? '' : 'trasparent-sheet'"
          class="text-left mx-auto"
        >
          <v-sheet
            :width="mobileUserCheck ? '90%' : '50%'"
            :class="isLightModeOn ? '' : 'trasparent-sheet'"
          >
            <div class="d-flex" :class="mobileUserCheck ? 'pt-6' : ''">
              <h3>Challenge</h3>
            </div>
            <p class="mt-4">
              {{ projectInfo.challenge }}
            </p>
            <p class="mt-4" v-show="projectInfo.challenge2">
              {{ projectInfo.challenge2 }}
            </p>
            <p class="mt-4" v-show="projectInfo.challenge3">
              {{ projectInfo.challenge3 }}
            </p>
          </v-sheet>
        </v-sheet></v-col
      >
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "ProjectsDetails",
  data: function () {
    return {
      projectInfo: [],
      showLoader: true,
      mobileUserCheck: false,
    };
  },
  computed: {
    ...mapGetters(["getCardListData"]),
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
  mounted() {
    let projectId = this.$route.params.id;
    let cardList = this.getCardListData;
    cardList.map((card) => {
      if (Number(card.id) === Number(projectId)) {
        this.projectInfo = JSON.parse(JSON.stringify(card));
        this.showLoader = false;
      }
    });
    window.scrollTo(0, 2);
    const { xs } = this.$vuetify.display;

    xs ? (this.mobileUserCheck = true) : (this.mobileUserCheck = false);
  },
  methods: {
    getImgUrl(picId) {
      console.log(picId);
      if (picId === undefined) {
        return require("data:,");
      } else {
        return require("../assets/Logo" + picId + ".jpeg");
      }
    },
  },
};
</script>

<style scoped>
.showcase-images {
  border-radius: 1rem;
  margin: 1rem;
}
.about-section {
  display: inline;
  text-align: left;
}
.trasparent-sheet {
  background-color: transparent;
}
</style>

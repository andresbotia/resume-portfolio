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
    <div class="flex-container space-around" v-show="!mobileUserCheck">
      <v-img
        width="400"
        height="400"
        aspect-ratio="1/1"
        class="showcase-images flex-item"
        :src="getImgUrl(projectInfo.id)"
      ></v-img>
      <v-img
        width="400"
        height="400"
        v-show="projectInfo.hasImage2"
        aspect-ratio="1/1"
        class="showcase-images flex-item"
        :src="getImgUrl2(projectInfo.id)"
      ></v-img>
      <v-img
        width="400"
        height="400"
        v-show="projectInfo.hasImage3"
        aspect-ratio="1/1"
        class="showcase-images flex-item"
        :src="getImgUrl3(projectInfo.id)"
      ></v-img>
    </div>
    <div class="flex-container space-around" v-show="mobileUserCheck">
      <v-carousel
        cycle
        height="400"
        class="parent-carousel"
        hide-delimiter-background
        :show-arrows="false"
      >
        <v-carousel-item :src="getImgUrl(projectInfo.id)"></v-carousel-item>

        <v-carousel-item
          v-if="projectInfo.hasImage2"
          :src="getImgUrl2(projectInfo.id)"
        ></v-carousel-item>

        <v-carousel-item
          v-if="projectInfo.hasImage3"
          :src="getImgUrl3(projectInfo.id)"
        ></v-carousel-item>
        <v-carousel-item
          v-if="projectInfo.hasImage4"
          :src="getImgUrl4(projectInfo.id)"
        ></v-carousel-item>
      </v-carousel>
    </div>
    <v-row class="mb-6" no-gutters>
      <v-col :cols="cols[0]" class="landing-message">
        <div class="d-flex">
          <h4>About Project</h4>
        </div>
        <div class="about-section">
          <p>Name: {{ projectInfo.name }}</p>
          <p v-if="projectInfo.hyperLinkSite" :href="projectInfo.siteAddress">
            Website:
            <a :href="projectInfo.siteAddress">{{
              projectInfo.siteAddressName
            }}</a>
          </p>
          <p v-else v-show="projectInfo.website">
            Website: {{ projectInfo.siteAddress }}
          </p>
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
            <p class="mt-4" v-show="projectInfo.showList">
              <v-list lines="one" density="compact">
                <v-list-item
                  v-for="n in projectInfo.list"
                  :key="n"
                  :title="n"
                ></v-list-item>
              </v-list>
            </p>
            <p class="mt-4" v-show="projectInfo.challenge3">
              {{ projectInfo.challenge3 }}
            </p>
            <p
              class="mt-4 text-center font-weight-bold"
              v-show="projectInfo.showFormula"
            >
              {{ projectInfo.formula }}
            </p>
            <p class="mt-4" v-show="projectInfo.challenge4">
              {{ projectInfo.challenge4 }}
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
    if (this.projectInfo.length <= 0) {
      this.$router.push({ name: "Error" });
    }
    window.scrollTo(0, 2);
    const { xs, sm, md } = this.$vuetify.display;

    let isSmallerScreen = false;
    if (xs | sm | md) {
      isSmallerScreen = true;
    }

    isSmallerScreen
      ? (this.mobileUserCheck = true)
      : (this.mobileUserCheck = false);
  },
  methods: {
    getImgUrl(picId) {
      if (picId === undefined) {
        return require("data:,");
      } else {
        return require("../assets/Logo" + picId + ".jpeg");
      }
    },
    getImgUrl2(picId) {
      if (picId === undefined) {
        return require("data:,");
      } else {
        if (this.projectInfo.hasImage2) {
          return require("../assets/project" + picId + "Image2.jpeg");
        } else {
          return require("data:,");
        }
      }
    },
    getImgUrl3(picId) {
      if (picId === undefined) {
        return require("data:,");
      } else {
        if (this.projectInfo.hasImage3) {
          return require("../assets/project" + picId + "Image3.jpeg");
        } else {
          return require("data:,");
        }
      }
    },
    getImgUrl4(picId) {
      if (picId === undefined) {
        return require("data:,");
      } else {
        if (this.projectInfo.hasImage4) {
          return require("../assets/project" + picId + "Image4.jpeg");
        } else {
          return require("data:,");
        }
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
.flex-container {
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
}
.flex-item {
  padding: 5px;
  width: 250px;
  height: 250px;
  margin: 5px;
  line-height: 50px;
  color: white;
  font-weight: bold;
  font-size: 2em;
  text-align: center;
}
.space-around {
  justify-content: space-around;
}
.parent-carousel {
  width: 40vh !important;
}
</style>

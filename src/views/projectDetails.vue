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
        <h4 class="ml-2">{{ projectInfo.date }}</h4>

        <v-icon class="ml-8" icon="mdi-tag"></v-icon>
        <h4 class="ml-2">{{ projectInfo.date }}</h4>
      </div>
    </v-row>
    <v-row class="mb-6" no-gutters>
      <div class="d-inline-flex">
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
          <h4>About Client</h4>
        </div>
        <div class="about-section">
          <p>Name: Company Ltd</p>
          <p>Services: UI Design & Frontend Development</p>
          <p>Website: https://company.com</p>
          <p>Phone: 555 8888 888</p>
        </div>
        <div class="d-flex mt-4">
          <h4>Objective</h4>
        </div>
        <div class="about-section">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
            natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas
            ipsa accusamus veniam.
          </p>
        </div>
        <div class="d-flex mt-4">
          <h4>Tools & Technologies</h4>
        </div>
        <div class="about-section">
          <p>HTML, CSS, JavaScript, Nuxt.js, TailwindCSS, AdobeXD</p>
        </div>
      </v-col>
      <v-col :cols="cols2[0]" class="landing-svg">
        <v-sheet width="90%" min-height="20rem" class="text-center mx-auto">
          <div class="d-flex">
            <h3>Challenge</h3>
          </div>
          <p class="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            accumsan euismod ante, vel eleifend mauris blandit sit amet. Nunc
            arcu enim, varius id dapibus vitae, congue eget dolor. Fusce finibus
            semper nisl, in semper velit pretium eget. Aliquam erat volutpat.
            Vivamus condimentum libero eu augue interdum volutpat. Nunc
            consequat ligula mi, id consequat erat faucibus eu. Donec quam sem,
            laoreet eget diam ut, euismod fringilla ex. Quisque id elit
            convallis, consectetur velit sed, vulputate arcu. Curabitur vel
            lacus dignissim, consectetur ipsum at, maximus ante. In placerat,
            leo sollicitudin fringilla finibus, magna nibh volutpat tortor, non
            molestie eros nulla nec metus. Nullam id sollicitudin lorem. Ut
            accumsan eros arcu, a imperdiet nisl dapibus ut. Nunc nisi risus,
            fermentum condimentum dictum sit amet, fermentum nec lorem. Duis.
            vehicula sodales magna fermentum elementum. Suspendisse eu leo
          </p>
          <p class="mt-4">
            luctus, vehicula orci ac, ornare arcu. Aenean quis leo aliquam,
            euismod orci sed, fermentum magna. Nullam consectetur turpis vel
            dolor iaculis venenatis. Quisque scelerisque fringilla elit in
            scelerisque. Integer mattis, justo nec hendrerit rhoncus, quam nunc
            pretium lorem, eu sollicitudin nisl purus at arcu. Quisque auctor mi
            id bibendum suscipit. Morbi porttitor eu urna ut feugiat. Nulla in
            leo porttitor augue viverra scelerisque a sit amet tortor. Fusce
            ultrices neque et faucibus fringilla. Duis congue in dui sit amet
            vehicula. Pellentesque augue velit, convallis non posuere ultrices,
            varius vel enim. Nunc non sem faucibus, luctus sem eu, suscipit
            nulla. Maecenas quis cursus sem. Integer ac pharetra eros. Phasellus
            scelerisque sollicitudin auctor.
          </p>
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
    console.log(this.projectInfo.id, "--");
    window.scrollTo(0, 2);
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
</style>

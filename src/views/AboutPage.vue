<template>
  <v-container class="pt-10">
    <v-row class="mb-6" no-gutters>
      <v-col :cols="cols[0]" class="landing-message">
        <div>
          <img
            src="../assets/avatar.jpg"
            alt="avatar photo"
            class="avatar-photo"
          />
        </div>
      </v-col>
      <v-col :cols="cols2[0]" class="landing-svg">
        <v-sheet
          width="90%"
          min-height="20rem"
          :border="false"
          rounded
          :class="isLightModeOn ? '' : 'trasparent-sheet'"
          class="pa-4 text-center mx-auto"
          ><v-sheet
            width="50%"
            min-height="20rem"
            :border="false"
            rounded
            class="mt-8 pa-4 text-center mx-auto"
          >
            <p>
              Hey there! 👋 I'm Andres Botia, a 24-year-old software engineer
              with a Bachelor's degree in computer science and a passion for all
              things front-end development, most recently Vue.js. I've worked on
              all sorts of projects including UI/UX, Front-end, and Back-end
              development.
            </p>
            <p class="mt-4">
              My portfolio reflects not just my technical proficiency but also
              the passion of my coding endeavors and real-world interests. Join
              me on this journey of blending functionality with simplicity and
              turning lines of code into meaningful experiences. Let's connect
              and explore the possibilities reach out to me using the contact me
              page above.💻
            </p>
            <p class="mt-4">
              When I'm not immersed in the world of code, you'll find me at the
              gym, playing a pickleball game, or grappling on the mats in
              Brazilian Jiu-Jitsu. 🥋
            </p>
          </v-sheet>
        </v-sheet></v-col
      >
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "AboutPage",
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
};
</script>

<style scoped>
.avatar-photo {
  border-radius: 0.5rem;
  max-width: 100%;
  height: auto;
}
.trasparent-sheet {
  background-color: transparent;
}
</style>

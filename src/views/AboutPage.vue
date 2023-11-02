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
          :border="true"
          rounded
          class="pa-4 text-center mx-auto"
        >
          <p>
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
  height: 300px;
  width: 300px;
}
</style>

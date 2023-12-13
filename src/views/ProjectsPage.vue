<template>
  <div class="col-12 mt-4">
    <h1>Projects Portfolio</h1>
  </div>
  <div
    class="col-10 d-flex justify-center flex-wrap mt-4"
    :class="mobileUserCheck ? 'mobile-view' : ''"
  >
    <v-card
      v-for="(card, i) in getCardListData"
      :key="i"
      max-width="500"
      class="individual-project-card"
      @click="openProjectDetails(card)"
    >
      <v-img
        class="align-end text-white"
        height="200"
        :src="getImgUrl(card.id)"
        cover
      >
      </v-img>

      <v-card-text>
        <div>
          <h1 class="card-title">{{ card.name }}</h1>
        </div>

        <div class="pt-4">{{ card.description }}</div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "ProjectsPage",
  data: function () {
    return {
      mobileUserCheck: false,
    };
  },
  computed: {
    ...mapGetters(["getCardListData"]),
  },
  mounted() {
    const { xs } = this.$vuetify.display;

    xs ? (this.mobileUserCheck = true) : (this.mobileUserCheck = false);
  },
  methods: {
    openProjectDetails(card) {
      this.$router.push({ name: "Details", params: { id: card.id } });
    },
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
.individual-project-card {
  flex-basis: 33.33333%;
  flex: 0 0 30%;
  margin: 2rem;
}
.mobile-view {
  flex-direction: column;
  align-items: center;
  justify-content: center !important;
}
.card-title {
  line-height: 1.4em;
}
</style>

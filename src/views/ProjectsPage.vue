<template>
  <div class="col-12 mt-4">
    <h1>Projects Portfolio</h1>
  </div>
  <div class="col-10 d-flex justify-center flex-wrap mt-4">
    <v-card
      v-for="card in cardList"
      :key="card.id"
      max-width="500"
      class="individual-project-card"
    >
      <v-img
        class="align-end text-white"
        height="200"
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        cover
      >
      </v-img>

      <v-card-text>
        <div>Project {{ card.id }}</div>

        <div>Project description here.....</div>
      </v-card-text>

      <v-card-actions style="display: none">
        <v-btn color="orange"> Share </v-btn>

        <v-btn color="orange"> Explore </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "ProjectsPage",
  data: function () {
    return {
      cardList: [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 },
      ],
    };
  },
};
</script>

<style scoped>
.individual-project-card {
  flex-basis: 33.33333%;
  flex: 0 0 30%;
  margin: 2rem;
}
</style>

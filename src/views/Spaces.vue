<template>
  <div class="Spaces">
    <h1>All Spaces</h1>
    <div v-for="space in spaces" v-bind:key="space.id">
      <h2>{{ space.address }}</h2>
      <img v-bind:src="space.image_url" v-bind:alt="space.address" />
      <br />
      <router-link v-bind:to="`/spaces/${space.id}`">More details</router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      spaces: [],
    };
  },
  created: function () {
    this.indexSpaces();
  },
  methods: {
    indexSpaces: function () {
      axios.get("/spaces").then((response) => {
        console.log("spaces", response);
        this.spaces = response.data;
      });
    },
  },
};
</script>

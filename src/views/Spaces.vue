<template>
  <div>
    <div>
      <div class="Spaces">
        <br />
        <br />
        <br />
        <br />
        <div v-for="space in spaces" v-bind:key="space.id">
          <br />
          <br />

          <h2>{{ space.address }}</h2>
          <br />
          <img v-bind:src="space.image_url" v-bind:alt="space.address" />
          <br />
          <br />
          <router-link v-bind:to="`/spaces/${space.id}`">More details</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
img {
  height: 400px;
  width: 500px;
}
</style>

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
        this.spaces = response.data;
        console.log("spaces", response);
      });
    },
  },
};
</script>

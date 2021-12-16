<template>
  <div class="spacesshow">
    <h2>{{ space.address }}</h2>
    <br />
    <img v-bind:src="space.image_url" />
    <br />
    <router-link to="/">Website</router-link>
    <!-- v-bind:alt="space.address" -->
    <br />
    <!-- <button v-bind:to="`/spaces/${space.id}`">Edit Space</button> -->
    <br />
    <!-- <button v-on:click="destroySpace(space)">Delete Space</button> -->
    <router-link to="/spaces">Back to All Spaces</router-link>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      space: {},
    };
  },
  created: function () {
    axios.get("/spaces/" + this.$route.params.id).then((response) => {
      console.log("spaces show", response);
      this.space = response.data;
    });
  },
  methods: {
    destroySpace: function (space) {
      axios.delete("/spaces/" + space.id).then((response) => {
        console.log("spaces destroy", response);
        this.$router.push("/spaces");
      });
    },
  },
};
</script>

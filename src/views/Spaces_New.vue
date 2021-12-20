<template>
  <div class="spacesnew">
    <br />
    <br />
    <br />
    <br />
    <br />
    <h1>New Space</h1>
    <form v-on:submit.prevent="createSpace()">
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <!-- <br />
        <br />
        <br />
        <br />
        <br /> -->
        Address:
        <input type="text" v-model="newSpaceParams.address" />
      </div>
      <br />
      <div>
        Description:
        <input type="text" v-model="newSpaceParams.description" />
      </div>
      <br />
      <div>
        Image URL:
        <input type="text" v-model="newSpaceParams.image_url" />
      </div>
      <br />
      <div>
        Website:
        <input type="text" v-model="newSpaceParams.website" />
      </div>
      <br />
      <button type="submit" value="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newSpaceParams: {},
      errors: [],
    };
  },
  // created: function () {},
  methods: {
    createSpace: function () {
      axios
        .post("/spaces", this.newSpaceParams)
        .then((response) => {
          console.log("spaces create", response);
          this.$router.push("/spaces");
        })
        .catch((error) => {
          console.log("spaces create error", error.response);
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>

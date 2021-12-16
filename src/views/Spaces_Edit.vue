<template>
  <div class="spacesedit">
    <h1>Edit Space</h1>
    <form v-on:submit.prevent="updateSpace(space)">
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
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
        Image:
        <input type="text" v-model="newSpaceParams.image_url" />
      </div>
      <br />
      <input type="submit" value="Update" />
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      space: {},
      errors: [],
    };
  },
  created: function () {
    axios.get("/spaces/" + this.$route.params.id).then((response) => {
      console.log("spaces show", response);
      this.space = response.data;
    });
  },
  methods: {
    updateSpace: function (space) {
      var editSpaceParams = space;
      axios
        .patch("/spaces/" + space.id, editSpaceParams)
        .then((response) => {
          console.log("spaces update", response);
          this.$router.push("/spaces");
        })
        .catch((error) => {
          console.log("spaces update error", error.response);
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>

<template>
  <div class="signup" id="alignment-id">
    <form v-on:submit.prevent="submit()">
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1>Signup</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label>First Name:</label>
        <input type="text" v-model="newUserParams.first_name" />
      </div>
      <br />
      <div>
        <label>Last Name:</label>
        <input type="text" v-model="newUserParams.last_name" />
      </div>
      <br />
      <div>
        <label>Image URL:</label>
        <input type="text" v-model="newUserParams.image_url" />
      </div>
      <br />
      <div>
        <label>Birthday:</label>
        <input type="text" v-model="newUserParams.birthday" />
      </div>
      <br />
      <div>
        <label>Email:</label>
        <input type="email" v-model="newUserParams.email" />
      </div>
      <br />
      <div>
        <label>Password:</label>
        <input type="password" v-model="newUserParams.password" />
      </div>
      <br />
      <div>
        <label>Password confirmation:</label>
        <input type="password" v-model="newUserParams.password_confirmation" />
      </div>
      <br />
      <input type="submit" value="Submit" />
    </form>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newUserParams: {},
      errors: [],
    };
  },
  methods: {
    submit: function () {
      axios
        .post("/users", this.newUserParams)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/login");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>

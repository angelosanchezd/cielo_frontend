<template>
  <div class="profile">
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
    <h1>Hello, {{ user.first_name }}</h1>
    <br />
    <img v-bind:src="user.image_url" v-bind:alt="user.image_url" />
    <div>
      <!-- <div v-for="space in spaces" :key="space.id">
        <p>{{ spaces.address }}</p>
        <hr />
      </div> -->
      <!-- <h1>{{ user.first_name }} {{ user.last_name }}</h1> -->
      <!-- <div v-for="booking in bookings" :key="booking.id">
      {{ user.bookings }} -->
      <!-- <hr /> -->
    </div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <b>Bookings:</b>
    {{ user.bookings.spaces }}
    <br />
    <!-- <button v-on:click="updateBooking()">Update Booking Details</button> -->
  </div>
</template>

<style>
img {
  height: 300px;
  width: 500px;
}
</style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      // userBookings: [],
      user: [],
      user_id: localStorage.getItem("user_id"),
    };
  },
  created: function () {
    this.isLoggedIn();
    this.profileUser();
    this.bookSpace();
    this.showBookings();
  },
  // mounted: function () {
  //   this.showBooking();
  // },
  methods: {
    profileUser: function () {
      axios.get("/users/" + this.user_id).then((response) => {
        this.user = response.data;
        console.log("all users", this.user);
      });
    },
    isLoggedIn: function () {
      if (localStorage.getItem("jwt")) {
        return true;
      } else {
        this.$router.push("/login");
      }
    },
    bookSpace: function () {
      axios.get("/bookings/" + this.space_id).then((response) => {
        this.userBookings = response.data.space;
        console.log("Success", response.data);
      });
    },
    showBookings: function () {
      axios.get("/users/" + this.user_id).then((response) => {
        this.userBookings = response.data.bookings;
        console.log("Success", response.data);
      });
    },
  },
};
</script>

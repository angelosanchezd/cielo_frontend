<template>
  <div class="profile">
    <img v-bind:src="user.image_url" :alt="user.id" />
    <p>Hello {{ user.first_name }}</p>
    <div>
      <div v-for="space in spaces" :key="space.id">
        <p>{{ space.address }}</p>
        <hr />
      </div>
      <!-- <h1>{{ user.first_name }} {{ user.last_name }}</h1> -->
      <!-- <div v-for="booking in bookings" :key="booking.id">
      {{ user.bookings }} -->
      <hr />
    </div>
    <b>Bookings:</b>
    {{ user.bookings.spaces }}
    <br />
    <!-- <button v-on:click="updateBooking()">Update Booking Details</button> -->
  </div>
</template>

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
    showBooking: function () {
      axios.get("/users/" + this.user_id).then((response) => {
        this.userBookings = response.data.bookings;
        console.log("Success", response.data);
      });
    },
  },
};
</script>

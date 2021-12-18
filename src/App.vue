<template>
  <div id="app">
    <!-- ======= Header ======= -->
    <header id="header" class="header fixed-top">
      <div class="container-fluid container-xl d-flex align-items-center justify-content-between">
        <a href="/" class="logo d-flex align-items-center">
          <img src="assets/img/logo.png" alt="" />
          <span>Cielo</span>
        </a>

        <!-- <div id="nav">
      <router-link to="/">Home</router-link>
      |
      <router-link to="/spaces">Spaces</router-link>
      |
      <span v-if="isLoggedIn()">
        <router-link to="/spacesnew">Add a Space</router-link>
        |
        <router-link to="/profile">Profile</router-link>
        |
        <router-link to="/logout">Logout</router-link>
      </span>
      <span v-else>
        <router-link to="/signup">Signup</router-link>
        |
        <router-link to="/login">Login</router-link>
      </span>
    </div> -->

        <nav id="navbar" class="navbar">
          <ul>
            <li><a class="nav-link scrollto active" href="/">Home</a></li>
            <li><a class="nav-link scrollto" href="/spaces">Spaces</a></li>
            <span v-if="isLoggedIn()">
              <li><a class="nav-link scrollto" href="/spacesnew">Add a Space</a></li>
              <li><a class="nav-link scrollto" href="/profile">Profile</a></li>
              <li><a class="nav-link scrollto" href="/logout">Logout</a></li>
            </span>
            <span v-else>
              <li><a class="nav-link scrollto" href="/signup">Signup</a></li>
              <li><a class="nav-link scrollto" href="/login">Login</a></li>
            </span>
            <!-- <li class="dropdown">
              <a href="#">
                <span>Drop Down</span>
                <i class="bi bi-chevron-down"></i>
              </a>
              <ul>
                <li><a href="#">Drop Down 1</a></li>
                <li class="dropdown">
                  <a href="#">
                    <span>Deep Drop Down</span>
                    <i class="bi bi-chevron-right"></i>
                  </a>
                  <ul>
                    <li><a href="#">Deep Drop Down 1</a></li>
                    <li><a href="#">Deep Drop Down 2</a></li>
                    <li><a href="#">Deep Drop Down 3</a></li>
                    <li><a href="#">Deep Drop Down 4</a></li>
                    <li><a href="#">Deep Drop Down 5</a></li>
                  </ul>
                </li>
                <li><a href="#">Drop Down 2</a></li>
                <li><a href="#">Drop Down 3</a></li>
                <li><a href="#">Drop Down 4</a></li>
              </ul>
            </li> -->
            <!-- <li><a class="nav-link scrollto" href="#contact">Contact</a></li> -->
            <li><a class="getstarted scrollto" href="#about">Get Started</a></li>
          </ul>
          <i class="bi bi-list mobile-nav-toggle"></i>
        </nav>
        <!-- .navbar -->
      </div>
    </header>
    <!-- End Header -->

    <a href="#" class="back-to-top d-flex align-items-center justify-content-center">
      <i class="bi bi-arrow-up-short"></i>
    </a>
    <router-view />
    <!-- ======= Footer ======= -->
    <footer id="footer" class="footer">
      <div class="footer-top">
        <div class="container">
          <div class="row gy-4">
            <div class="col-lg-5 col-md-12 footer-info">
              <a href="/" class="logo d-flex align-items-center">
                <img src="assets/img/logo.png" alt="" />
                <span>Cielo</span>
              </a>

              <!-- <div class="social-links mt-3">
                <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
                <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
                <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
                <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
              </div> -->
            </div>

            <div class="col-lg-2 col-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <!-- <li>
                  <i class="bi bi-chevron-right"></i>
                  <a href="/about">Home</a>
                </li> -->
                <li>
                  <i class="bi bi-chevron-right"></i>
                  <a href="/spaces">Spaces</a>
                </li>
                <li>
                  <i class="bi bi-chevron-right"></i>
                  <a href="/signup">Signup</a>
                </li>
                <li>
                  <i class="bi bi-chevron-right"></i>
                  <a href="/login">Login</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="copyright">
          &copy; Copyright
          <strong><span>FlexStart</span></strong>
          . All Rights Reserved
        </div>
        <div class="credits">
          <!-- All the links in the footer should remain intact. -->
          <!-- You can delete the links only if you purchased the pro version. -->
          <!-- Licensing information: https://bootstrapmade.com/license/ -->
          <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/flexstart-bootstrap-startup-template/ -->
          Designed by
          <a href="https://bootstrapmade.com/">BootstrapMade</a>
        </div>
      </div>
    </footer>
    <!-- End Footer -->
  </div>
</template>

<style></style>

<script>
export default {
  data: function () {
    return {
      flashMessage: "",
    };
  },
  methods: {
    isLoggedIn: function () {
      if (localStorage.getItem("jwt")) {
        return true;
      } else {
        return false;
      }
    },
    getUserId: function () {
      return localStorage.getItem("user_id");
    },
  },
};
</script>

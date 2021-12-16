import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Spaces from "../views/Spaces.vue";
import SpacesNew from "../views/Spaces_New.vue";
import SpacesShow from "../views/Spaces_Show.vue";
import SpacesEdit from "../views/Spaces_Edit.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Profile from "../views/Profile.vue";
import Logout from "../views/Logout.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/spaces",
    name: "Spaces",
    component: Spaces,
  },
  {
    path: "/spacesnew",
    name: "spacesnew",
    component: SpacesNew,
  },
  {
    path: "/spaces/:id",
    name: "spacesshow",
    component: SpacesShow,
  },
  {
    path: "/spaces/:id",
    name: "spacesedit",
    component: SpacesEdit,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/login",
    name: "Log in",
    component: Login,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/logout",
    name: "Logout",
    component: Logout,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/home";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/profile",
    name: "Profile",
    component: () =>
      import(/* webpackChunkName: "profile" */ "../views/profile/index"),
    children: [
      {
        path: "",
        name: "ProfilePost",
        component: () =>
          import(/* webpackChunkName: "profilePost" */ "../views/profile/post")
      },
      {
        path: "igtv",
        name: "IGTV",
        component: () =>
          import(/* webpackChunkName: "profileIGTV" */ "../views/profile/igtv")
      },
      {
        path: "save",
        name: "ProfileSave",
        component: () =>
          import(/* webpackChunkName: "profileSave" */ "../views/profile/save")
      },
      {
        path: "tag",
        name: "ProfileTag",
        component: () =>
          import(/* webpackChunkName: "profileTag" */ "../views/profile/tag")
      }
    ]
  },
  {
    path: "/explore",
    name: "Explore",
    component: () =>
      import(/* webpackChunkName: "explore" */ "../views/explore/index")
  },
  {
    path: "/direct",
    name: "Direct",
    component: () =>
      import(/* webpackChunkName: "direct" */ "../views/direct/index")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

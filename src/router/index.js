import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
import Construction from "../views/Construction.vue";
// import Contact from "../views/Contact.vue";
// import Works from "../views/Works.vue";
// import jukelift from "../views/jukelift.vue";
// import marha from "../views/marha.vue";
// import ShopeeDesign from "../views/ShopeeDesign.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Construction",
    component: Construction
  },
  // {
  //   path: "/works",
  //   name: "Works",
  //   component: Works
  // },
  // {
  //   path: "/contact",
  //   name: "Contact",
  //   component: Contact
  // },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // },
  // {
  //   path: "/marha",
  //   name: "marha",
  //   component: marha
  // },
  // {
  //   path: "/shopee-design-challenge",
  //   name: "Shopee Design Challenge",
  //   component: ShopeeDesign
  // },
  // {
  //   path: "/jukelift",
  //   name: "Jukelift",
  //   component: jukelift
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

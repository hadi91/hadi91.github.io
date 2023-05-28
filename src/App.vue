<template>
  <div id="app">
    <!-- <TopNav /> -->
    <router-view></router-view>
    <BottomNav />
  </div>
</template>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  font-family: "Noto Sans JP", sans-serif;
  margin: 0;
  padding: 0;
}

p {
  font-size: 1.2em;
}

h4 {
  font-size: 1.2em;
}

h3 {
  font-size: 1.4em;
}

h1 {
  font-size: 1.8em;
}

h2 {
  font-size: 1.6em;
}
</style>

<script>
// import TopNav from "@/components/TopNav.vue";
import BottomNav from "@/components/BottomNav.vue";

export default {
  name: "App",
  components: {
    // TopNav,
    BottomNav
  }
};
</script>

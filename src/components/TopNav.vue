<template>
  <div class="top-nav">
    <div class="logo"><router-link to="/" id="logo-link"><img src="../assets/AN_logo.png" alt="logo"></router-link></div>
    <div id="burger-menu" v-on:click="openMobileNav">
      <div class="line line1"></div>
      <div class="line line2"></div>
      <div class="line line3"></div>
    </div>
    <div id="navbar">
      <li class="nav-link">
        <router-link to="/">Home</router-link>
      </li>
      <li class="nav-link">
        <router-link to="/works">Works</router-link>
      </li>
      <li class="nav-link">
        <router-link to="/about">About</router-link>
      </li>
      <li class="nav-link">
        <router-link to="resume.pdf" target="_blank">Resume</router-link>
      </li>
    </div>
  </div>
</template>

<style scoped>
.top-nav {
  height: 150px;
  z-index: 1;
}

.logo {
  display: inline-block;
  float: left;
  margin: 50px 50px;
}

#navbar {
  position: absolute;
  top: 50px;
  right: 50px;
  font-size: 1.6em;
  /* background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 12px 12px 16px 0 rgba(0, 0 ,0, 0.25),
  -8px -8px 12px 0 rgba(255, 255 ,255, 0.3); */
}

li {
  margin-right: 20px;
  list-style: none;
  display: inline;
}

a {
  text-decoration: none;
  color: #000;
}

.router-link-exact-active:not(#logo-link) {
  color: #6930c3;
  border-bottom: 5px solid #000;
  padding-bottom: 10px;
  transition:cubic-bezier(0.075, 0.82, 0.165, 1);
}

li:last-of-type {
  margin-right: 0;
}

#burger-menu {
  display: none;
  float: right;
  margin: 50px 50px;
}

.line {
  height: 2px;
  background-color: #000;
  width: 35px;
  margin: 0.5rem 0;
  transition: transform 0.75s ease, opacity 0.75s ease;
}

.top-nav.show .line1 {
  transform: translate(-10px) rotate(45deg) translate(15px);
}

.top-nav.show .line2 {
  opacity: 0;
}

.top-nav.show .line3 {
  transform: translate(-10px) rotate(-45deg) translate(15px);
}

.top-nav.show #navbar {
  transform: translateX(0%);
}

@media screen and (max-width: 768px) {
  #burger-menu {
    display: inline-block;
    cursor: pointer;
  }

  #show-menu {
    display: block;
  }

  li {
    margin-top: 10px;
    display: block;
  }

  #navbar {
    position: fixed;
    top: 13vh;
    right: 0;
    width: 50%;
    transform: translateX(100%);
    background: #000;
    color: #fff;
    transition: transform 1s ease;
    height: 92vh;
    z-index: 99;
    text-align: center;
  }
  li > a{
    color: #fff;
    text-align: center;
    padding: 30px;
    display: inline-block;
    border-bottom: 2px solid #fff;
  }

  li {
    margin: 0;
  }

  li > a:hover {
    border: 3px solid #fff;
    transition: border 5s;
  }
}
</style>

<script>
export default {
  name: "TopNav",
  methods: {
    openMobileNav() {
      const nav = document.querySelector(".top-nav");
      nav.classList.toggle('show');
    },
  },
};
</script>

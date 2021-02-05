<template>
  <div class="home">
    <div id="hi">
      <h1>Hi! I'm <span>Hadi &#128075;,</span></h1>
      <h2>a user-centric and data-driven UX designer.</h2>
      <p id="down-rocket">&#128640;</p>
    </div>
    <div id="work-bg">
      <div id="work-con">
        <h3 id="work-header">Works</h3>
        <div id="workcard">
          <WorkCard
            v-for="work in works"
            :key="work.id"
            :title="work.title"
            :url="work.url"
            :shape="work.shape"
            :workBg="work.workBg"
            :workDes="work.description"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.home {
  padding: 50px 0 50px 0;
}

#hi {
  margin-bottom: 3em;
}

#hi > h1 {
  font-size: 3.5em;
}

#hi > h2 {
  font-size: 2em;
}

#work-bg {
  background-color: #f5f5f5;
  padding: 250px 200px;
  border-radius: 50%;
  height: 100%;
}

#work-con {
  margin-top: -200px;
}
#work-header {
  font-size: 2em;
  margin-top: 50px;
  text-decoration: underline;
  font-family: 'Noto Sans JP';
}

/* #workcard > a:hover {
  margin-bottom: 20px;
} */

/* #workcard {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
} */

#workcard > a {
  vertical-align: top;
  padding: 50px 3%;
  display: inline-block;
}

#down-rocket {
  font-size: 3em;
  transform: rotate(133deg);
  margin-top: 100px;
}

@media screen and (max-width: 768px) {
  #workcard {
    grid-template-columns: auto;
  }

  #work-bg {
    padding: 250px 100px;
  }
}
</style>

<script>
// @ is an alias to /src
import WorkCard from "@/components/WorkCard.vue";

export default {
  name: "Home",
  components: {
    WorkCard
  },
  data() {
    return {
      works: [
        {
          title: "Shopee Design Challenge",
          url: "/shopee-design-challenge",
          image: "url",
          shape: "circle",
          workBg: "shopee-bg",
          description: "2020 Design challenge to innovate new features for Shopee"
        },
        {
          title: "JukeLift",
          url: "/jukelift",
          image: "url",
          shape: "hexagon",
          workBg: "jukelift-bg",
          description: "Jukelift provides the platform for residents to interact and improve relationships"
        },
        {
          title: "Marha",
          url: "/marha",
          image: "url",
          shape: "square",
          workBg: "marha-bg",
          description: "Marha is a mobile app that allows working adults to learn arabic easily and on the go"
        }
      ]
    };
  }
};
</script>

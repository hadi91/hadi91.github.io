<template>
  <div>
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
</template>

<style scoped>

</style>

<script>

import WorkCard from "@/components/WorkCard.vue";

export default {
  name: "Works",
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


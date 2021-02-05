<template>
  <router-link :to="url">
    <div class="work-card">
      <div :class="workBg">
        <p id="work-title">{{ title }}</p>
      </div>
      <div class="bottom-card">
        <p>{{workDes}}</p>
      </div>
    </div>
  </router-link>
</template>

<style scoped>

.bottom-card {
  background-color: #fff;
  position: absolute;
  bottom: -90px;
  padding: 20px;
  display: none;
  color: #000;
}

.work-card:hover .bottom-card {
  display: block;
  transition: 10s;
  padding: 20px 25px;
  /* border-bottom: 2px solid #000;
  border-right: 2px solid #000;
  border-left: 2px solid #000; */
}

.work-card:hover .marha-bg,
.work-card:hover .jukelift-bg,
.work-card:hover .shopee-bg {
  box-shadow: none;
  transition: 2s;
  /* border-left: 2px solid #000;
  border-top: 2px solid #000;
  border-right: 2px solid #000; */
}

.work-card {
  display: inline-block;
  position: relative;
}



.marha-bg:hover,
.jukelift-bg:hover,
.shopee-bg:hover {
  margin-bottom: 20px;
}

.work-card:nth-of-type(3) {
  margin-right: 0;
}

#bg-word-card {
  border-radius: 20px;
}

.marha-bg,
.jukelift-bg,
.shopee-bg {
  height: 400px;
  width: 300px;
  border-radius: 20px;
  box-shadow: 12px 12px 16px 0 rgba(0, 0, 0, 0.25),
  -8px -8px 12px 0 rgba(255, 255, 255, 0.3);
  padding: 20px;
}

.marha-bg {
  background-image: url("../assets/marha_banner.png");
  background-size: cover;
  background-position: center 50px;
}

.jukelift-bg {
  background-image: url("../assets/actual_jukelift.jpg");
  background-size: cover;
  background-position: -105px 25px;
  background-repeat: no-repeat;
  background-color: #eea87b;
}

.shopee-bg {
  background-image: url("../assets/shopee_banner.png");
  background-size: cover;
  background-position: center 80px;
  background-color: #fa5532;
}

#work-title {
  font-family: 'Noto Sans JP', sans-serif;
/* font-family: 'Noto Sans JP', sans-serif;
font-family: 'Playfair Display', serif; */
  font-size: 1.6em;
  font-weight: 700;
  color: #fff;
  padding-top: 20px;
}

@media screen and (max-width: 768px) {
  .work-card {
    margin: 25px 0;
  }
}
</style>

<script>
export default {
  name: "WorkCard",
  props: ["title", "url", "shape", "workBg", "workDes"],
};
</script>

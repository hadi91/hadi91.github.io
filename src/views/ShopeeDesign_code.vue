<template>
  <div id="shopee">
    <div class="top-container">
      <div class="circle">
        <h2>Shopee Design Challenge</h2>
        <p>Engaging 2021 Local Consumers</p>
      </div>
      <div class="ver-container">
        <div
          class="ver-proj-info"
          v-for="verInfo in verInfos"
          :key="verInfo.id">
          <h4>{{ verInfo.title }}</h4>
          <p>{{ verInfo.content1 }}</p>
          <p>{{ verInfo.content2 }}</p>
        </div>
      </div>
    </div>
    <div class="hor-container">
      <div class="hor-proj-info" v-for="horInfo in horInfos" :key="horInfo.id">
        <h1>{{ horInfo.title }}</h1>
        <p>{{ horInfo.littleDes }}</p>
        <p class="num-indicate">{{ horInfo.number1 }}</p>
        <h2>{{ horInfo.subtitle1 }}</h2>
        <p>{{ horInfo.description1 }}</p>
        <p class="num-indicate">{{ horInfo.number2 }}</p>
        <h2>{{ horInfo.subtitle2 }}</h2>
        <p>{{ horInfo.description2 }}</p>
        <p class="num-indicate">{{ horInfo.number3 }}</p>
        <h2>{{ horInfo.subtitle3 }}</h2>
        <p>{{ horInfo.description3 }}</p>
        <p>{{ horInfo.description }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
#shopee {
  font-size: 1.2em;
}

.top-container {
  background-image: url("../assets/shopee.png");
  background-size: cover;
  background-position-y: center;
  box-shadow: 12px 12px 16px 0 rgba(0, 0 ,0, 0.25),
  -8px -8px 12px 0 rgba(255, 255 ,255, 0.3);
  width: 90%;
  border-radius: 20px;
  border: 5px solid #3f3a43;
  margin: 0 auto;
}

.circle {
  display: inline-block;
  height: 230px;
  width: 230px;
  border-radius: 50%;
  border: 2px solid black;
  padding: 20px;
}

.circle > h2 {
  margin-top: 25%;
}

.top-container {
  display: flex;
  justify-content: space-between;
  padding: 70px 50px 70px 50px;
}

.hor-container {
  padding: 50px;
  text-align: left;
}

h2,h3,h4 {
  text-transform: uppercase;
}

p {
  margin: 0;
}
.ver-proj-info {
  text-align: left;
}

.hor-proj-info > h1 {
  text-transform: uppercase;
  padding-bottom: 0.5em;
  border-bottom: 10px solid #9475e5;
  display: inline-block;
}

.hor-proj-info > p {
  font-size: 1.2em;
}

.hor-proj-info {
  margin-top: 3em;
}

/* .hor-proj-info > hr {
  border: 1px solid #9475e5;
  width: 70%;
  margin-top: 3em;
  margin-bottom: 3em;
} */

</style>

<script>
export default {
  name: "ShopeeDesign",
  data() {
    return {
      verInfos: [
        {
          title: "role",
          content1: "UI/UX Designer",
        },
        {
          title: "team",
          content1: "3 UI/UX Designers"
        },
        {
          title: "tools",
          content1: "Figma, Miro",
          content2: "Slack, Tello"
        }
      ],
      horInfos: [
        {
          title: "overview",
          description: "Shopee has been growing tremendously in the past 5 years since its launch. It is the leading e-commerce platform in Southeast Asia and Taiwan, connecting consumers, sellers, and businesses across 7 markets in the region. They continue to strive being the preferred e-commerce platform in the region and looking for ways to build upon their success. Shopee Design Challenge encourages new ideas and creativity to push Shopee even further into greater heights."
        },
        {
          title: "problem statement",
          description: " 'How do we engage the 2021 Local Consumer so that Shopee continues to be the preferred e-commerce platform?' "
        },
        {
          title: "research findings",
          littleDes: "To better understand the consumer's experience with Shopee, we conducted 3 several research methods; Survey, User interview, App Walkthrough, Competitor Analysis.",
          number1: "",
          subtitle1: "01 Online Survey",
          description1: "We conducted an online survey to find out consumers' shopping experience with Shopee. We garnered 39 responses and found out recurring pain points they faced.",
          number2: "",
          subtitle2: "02 User Interview & Mobile App Walkthrough",
          description2: "",
          number3: "",
          subtitle3: "03 Existing Solutions",
          description3: ""
        },
        {
          title: "our solution",
          description: "sds"
        },
        {
          title: "further development",
          subtitle1: "User Interview & Mobile App Walkthrough",
          description1: "",
          subtitle2: "Existing Solutions",
          description2: ""
        },
        {
          title: "what i learned",
          description: "sds"
        }
      ]
    };
  }
};
</script>

<template>
  <div id="poly-courses">
    <div class="top-container">
      <div class="hexagon">
        <h2>Course Selections</h2>
        <p>Simplifying Course Selection Process</p>
      </div>
      <div class="ver-container">
        <div
          class="ver-proj-info"
          v-for="verInfo in verInfos"
          :key="verInfo.id"
        >
          <h4>{{ verInfo.title }}</h4>
          <p>{{ verInfo.content1 }}</p>
          <p>{{ verInfo.content2 }}</p>
        </div>
      </div>
      <div class="hor-container">
        <div class="hor-proj-info">
          <h1>Overview</h1>
          <p>
            Secondary school leavers in Singapore have always faced anxiety when
            they received their O-level results. This means that they have a
            limited time of approximately 1 week to choose several courses that
            caters to their interest and career path. To make matters worse, the
            course selection is huge as they need to search through the 6 public
            polytechnics and compare which course fits their needs. Choosing the
            right course to enter is important as it will mean that they are
            contributing 3 years of their life to shape their career path. Not
            getting a suitable course would mean that they may get unmotivated
            in the long run or seek other pastures elsewhere.
          </p>
        </div>
        <div class="hor-proj-info">
          <h1>problem statement</h1>
          <p>
            "How might we improve the selection process for graduating secondary
            school students?"
          </p>
        </div>
      </div>
      <div class="hor-proj-info">
        <h1>Research Findings</h1>
        <h2>01 Online Survey</h2>
        <p>
          To get a better feel of the current situation, we conducted an online
          survey to recent secondary school leavers currently in polytechnics.
          We garnered 67 responses and found common problems faced by them.
        </p>
        <div class="survey-con">
          <div class="survey-info">
            <p class="survey-num">93.8%</p>
            <p class="survey-text">
              Chooses a course due to their Interest or Passion.
            </p>
          </div>
          <div class="survey-info">
            <p class="survey-num">94.4%</p>
            <p class="survey-text">
              Still unsure what to pursue for career
            </p>
          </div>
          <div class="survey-info">
            <p class="survey-num">50%</p>
            <p class="survey-text">
              Found out that there were too many choices
            </p>
          </div>
        </div>
        <h2>02 User Interview</h2>
        <p>
          To gather more indepth knowledge of their selection experience, we
          interviewed 2 second-year students studying in Polytechnic.
        </p>
        <h3>Syahirah</h3>
        <p>
          "I will go to each polytechnic website and search for the courses that
          match my interest. I will also try to find any alumni that I can ask
          advice from"
        </p>
        <h3>Azmi</h3>
        <p>
          "My points were not enough for the initial course that I wanted. I had
          to search for other courses that were within my result in a short span
          of time. It was stressful to pick the courses as there were just too
          many and I do not know which one is best for me."
        </p>

        <h3>03 Card Sorting</h3>
        <p>
          As this is a very data driven problem, card sorting was the best
          method to find out what is important to the users and how they
          perceive the data received. 5 current polytechnic students were tasked
          to complete a non-structured card sorting and group information
          accordingly.
        </p>
        <img src="" alt="" />
      </div>

      <div class="hor-proj-info">
        <h1>Our solution</h1>
        <p>
          Based on the findings, we found out that students are usually
          overwhelmed with the number of courses from the various polytechnics.
          To top it off, they still need to double check if their result meets
          the requirement. It was very time-consuming and stressful.
        </p>
      </div>

      <div class="hor-proj-info">
        <h1>Further Developments</h1>
        <p>
          "How might we improve the selection process for graduating secondary
          school students?"
        </p>
      </div>

      <div class="hor-proj-info">
        <h1>What I learned</h1>
        <p>
          "How might we improve the selection process for graduating secondary
          school students?"
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
p {
  font-size: 1.2em;
}
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
          content2: "Full-Stack Developer",
        },
        {
          title: "team",
          content1: "2 UI/UX Designers",
          content2: "1 Full-Stack Developer",
        },
        {
          title: "tools",
          content1: "Adobe XD, Miro",
          content2: "Slack, Tello",
          content3: "VueJS, Firebase",
        },
      ],
      horInfos: [
        {
          title: "overview",
          description:
            "Shopee has been growing tremendously in the past 5 years since its launch. It is the leading e-commerce platform in Southeast Asia and Taiwan, connecting consumers, sellers, and businesses across 7 markets in the region. They continue to strive being the preferred e-commerce platform in the region and looking for ways to build upon their success. Shopee Design Challenge encourages new ideas and creativity to push Shopee even further into greater heights.",
        },
        {
          title: "problem statement",
          description:
            "How do we engage the 2021 Local Consumer so that Shopee continues to be the preferred e-commerce platform?",
        },
        {
          title: "research findings",
          subtitle1: "Online Survey",
          description1: "",
          subtitle2: "User Interview & Mobile App Walkthrough",
          description2: "",
          subtitle3: "Existing Solutions",
          description3: "",
        },
        {
          title: "our solution",
          description: "sds",
        },
        {
          title: "further development",
          subtitle1: "User Interview & Mobile App Walkthrough",
          description1: "",
          subtitle2: "Existing Solutions",
          description2: "",
        },
        {
          title: "what i learned",
          description: "sds",
        },
      ],
    };
  },
};
</script>

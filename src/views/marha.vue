<template>
  <div id="shopee">
    <div class="banner-con">
      <h1>Marha.</h1>
      <p>Arabic learning made easy</p>
      <div id="marha-banner"></div>
      <div class="banner-des">
        <div class="tools">
          <h4 class="uppercase">Tools</h4>
          <p>Adobe XD, Illustrator, Photoshop</p>
          <p>Slack, Trello</p>
        </div>
        <div class="role">
          <h4 class="uppercase">role</h4>
          <p>UI/UX Designer</p>
          <p>Mobile App Developer</p>
          <h4 class="uppercase" id="team">team</h4>
          <p>2 UI/UX Designers</p>
          <p>1 React Native Developer</p>
        </div>

        <div class="timeline">
          <h4 class="uppercase">timeline</h4>
          <p>3 months (Part-time)</p>
        </div>
      </div>
    </div>
    <div class="hor-proj-info" id="overview">
      <h1>Overview</h1>
      <p>
        This is a personal project. Arabic Language is a big component in
        understanding the religion, Islam, better. However, as most muslim
        singaporeans are not exposed to the language during childhood, they tend
        to learn it at a later stage and struggle to understand or master the
        language. Hence, most eventually fall out while studying halfway because
        the language is difficult for them to understand. Therefore, we came out
        with a problem statement;
      </p>
    </div>
    <div class="hor-proj-info" id="prob-state">
      <h1>problem statement</h1>
      <p>
        "How do we simplify arabic language learning for adults to make it easy
        for them to master?"
      </p>
    </div>
    <div class="hor-proj-info">
      <h1>research findings</h1>
      <p>
        To better understand the muslim adults' arabic learning journey and
        issues, we conducted several research studies mainly; Survey, Competitor
        analysis and App testing.
      </p>
      <p class="num-indicate"></p>
      <h2>01 Online Survey</h2>
      <p>
        We conducted an open online survey and managed to gather 42 responses.
        We found out that the majority of people started to learn arabic
        language on the side from the age 25-34 years old. Most of them are
        working adults and find it hard to dedicate time to learn or revise
        their arabic daily. Many of them are still learning arabic through the
        traditional method by regular class and teacher. They are not willing to
        learn through online platforms as they are scared that it is too hard to
        understand without a teacher.
      </p>
      <div class="survey-con">
        <div class="survey-info">
          <p class="survey-num">59.5%</p>
          <p class="survey-text">
            Are too busy to find time to revise their arabic learning
          </p>
        </div>
        <div class="survey-info">
          <p class="survey-num">41.1%</p>
          <p class="survey-text">
            Find it hard to understand the grammar structures
          </p>
        </div>
        <div class="survey-info">
          <p class="survey-num">47.5%</p>
          <p class="survey-text">
            Prefer interactive games as compared to traditional learning
          </p>
        </div>
      </div>
      <p class="user-persona-des">
        Based on the online survey results demographic, we created 2 main
        personas that fit the common learners. We used the User Personas as a
        guideline to identify the right participants for the competitors app
        test.
      </p>
      <div class="user-persona-con">
        <img
          class="user-persona"
          src="../assets/aishah_persona.png"
          alt="Ragul User Persona"
        />
        <img
          class="user-persona"
          src="../assets/rahman_persona.png"
          alt="Sean User Persona"
        />
      </div>
      <h2>02 Competitor analysis</h2>
      <p>
        Based on our research, we found out that there are a few online tools
        available for learning arabic. We picked 2 apps that we found were
        popular and relevant in learning arabic and asked our participants to
        use the app as we recorded their movement using the app. 3 participants
        were tasked to use the competitor’s app from the start to the completion
        of 1 lesson in the app.
      </p>
      <div id="walkthrough-con">
        <img
          src="../assets/marha_competitor_test.gif"
          alt="app walkthrough"
          id="walkthrough"
        />
      </div>
      <div id="mkt-con">
        <p id="mkt-img-des">
          Users are confused at first usage of the interactive games in ther
          language apps. For instance, they would tend to tap rather than swipe
          the card game or take a while to scan through the interface before
          tapping on the first thing that catches their glance.
        </p>
        <img src="../assets/drops.jpg" alt="Product Marketing Image" id="drops-img"/>
      </div>
    </div>
    <div id="solution-bg">

      <div class="hor-proj-info" id="our-solution">
        <h1>our solution</h1>
        <p>
          We ideated mainly around mobile app as users have indicated that they
          want a tool that is handy and available to them at any time. Based on
          the research findings, we identified main features that users want in an
          arabic language app;
        </p>
        <p>1. Having a teacher or mentor helps</p>
        <p>
          2. A journey based learning will motivate them to continue on the path
          and not quit
        </p>
        <p>
          3. Having regular feedback ensures that they are on the right track.
        </p>
        <p>
          4. A daily reminder/alarm will remind them amidst of busy work schedules
        </p>
        <p>
          5. Interactive games will be better suited to tapping motion rather than
          swiping motion
        </p>
        <div id="marha-wireframe">
          <h4 id="marha-sketch">
            We started sketching out the wireframe of the app with the above
            features in mind.
          </h4>
          <img src="../assets/marha_wireframe1.png" alt="marha wireframe 1" />
          <img src="../assets/marha_wireframe2.png" alt="marha wireframe 2" />
        </div>
        <div id="ali-character">
          <img src="../assets/ali.png" alt="Ali Character" />
          <p>
            We created a specific character named Ali as the main mentor for our
            product. Having a synonym character will make them feel that they are
            learning under a teacher and supervised by someone.
          </p>
        </div>
        
        <div id="visual-system">
          <h2>Visual System</h2>
          <img src="../assets/visual_sys.png" alt="visual system" />
        </div>

        <h2>Hi-Fi Prototypes</h2>
        <div id="marha-hifi-proto">
          <img src="../assets/hifi_proto.png" alt="Hi Fidelity Prototypes" />
        </div>
      </div>
    </div>
    <div class="hor-proj-info">
      <h1>Final Product</h1>
      <p id="intro-marha">Introducing <span class="underline">Marha.</span></p>
      <p>
        Marha is your friendly arabic learning companion that you can depend on
        the move.
      </p>
      <div id="marha-prototype">
        <img src="../assets/marha_prototype.gif" alt="Interactive Prototype" />
      </div>
    </div>
    <hr class="section-divider"/>
    <div class="hor-proj-info">
      <h1>further development</h1>
      <p>
        We have only designed one section of greetings in arabic and will be
        looking to add more content in the future. As mentioned earlier, the
        dropout number of arabic learners are usually high so we will be looking
        to track and implement measures to entice and motivate them to keep
        coming back to the app.
      </p>
    </div>
    <hr class="section-divider"/>
    <div class="hor-proj-info">
      <h1>what i learned</h1>
      <h3>Understanding users' habits by testing with competitors</h3>
      <p>
        The user testing with competitor's app has shown us that we can actually
        make use of competitor's app to our advantage and learn how users
        respond to them as competitors will usually operate in a close fashion
        to us. This helps us learn user habits fast without the need to
        prototype first.
      </p>
    </div>
  </div>
</template>

<style>

#marha-banner {
  background-image: url("../assets/marha_banner.png");
  height: 700px;
  background-position: center;
  background-size: cover;
  margin-top: 50px;
}

#marha-wireframe > img {
  width: 80%;
  margin: 40px 0;
}

#marha-wireframe {
  text-align: center;
}

#marha-wireframe > h4 {
  margin-top: 50px;
}

#marha-hifi-proto > img {
  width: 100%;
}



#drops-img {
  width: 50%;
}

#ali-character > p {
  width: 45%;
  display: inline-block;
  text-align: left;
  vertical-align: top;
  margin: 50px 0 0 100px;
}

#ali-character {
  text-align: center;
  margin-top: 100px;
}

#visual-system {
  margin: 100px 0;
}

#visual-system > img {
  width: 100%;
}

#visual-system > h2 {
  margin: 20px 0;
}

#intro-marha {
  font-size: 3em;
  font-weight: 900;
}

.underline {
  text-decoration: underline;
}

#marha-prototype > img {
  border-radius: 20px;
  border: 4px solid #000;
  box-shadow: 4px 4px 30px #aeb4b9;
}

#marha-prototype {
  text-align: center;
  margin-top: 100px;
}

#marha-prototype > img {
  width: 40%;
}

@media screen and (max-width: 768px) {
  #ali-character > p {
    width: 80%;
    margin: 20px 0 0 0;
    text-align: center;
  }

  #marha-wireframe > img {
    width: 100%;
  }

  #marha-prototype > img {
    width: 80%;
  }
}

</style>

<script>
export default {
  name: "Marha",
};
</script>

<template>
  <div class="about">
    <div id="about-img">
    </div>
    <div id="about-dev">
      <h1>Researcher. Designer. Developer</h1>
      <p>
        I’m a jack of all trades, master of <span class="bold">ONE</span> <span class="underline">[UX Design, thank god</span> &#128517;].
      </p>
      <p>
        My inherently curious personality had led me to numerous learning journeys,
        from the field of Aviation to the land of Web Development and Startups.
        I have worked as a Tutor, Flight Dispatcher, Front-End Developer and
        now, I finally feel at home combining the knowledge of human behaviour,
        technology and design to solve user’s problems and innovate products.
      </p>
      <p>
        My unique background had provided me with a good range of skills and
        tools to break down complex problems and provide solutions in a holistic
        manner.
      </p>
      <a href="mailto:ahmad_nurhadi@hotmail.com?subject=Enquiry on collaborations" id="contact-btn" >Contact Me</a>
    </div>
    <hr class="about-divider">

    <!-- <div id="interest">
      <h2>Main Interests</h2>
      <li>UX for good</li>
      <li>Design Systems</li>
      <li>Geometric Patterns</li>
      <li>Community Ecosystems</li>
      <li>Data Visualization</li>
      <li>Self-Improvement Routines</li>
      <li>Teaching</li>
      <li>Soccer</li>
      <li>Volunteering for Underpriviledged Children</li>
      <li>Solo Travelling</li>
      <li>Digital Nomad</li>
    </div> -->
  </div>
</template>

<style scoped>

.about {
  padding: 0px 0 50px 0;
}

#about-img {
  display: inline-block;
  width: 455px;
  height: 500px;
  background-image: url("../assets/iran.jpg");
  background-size: cover;
  background-position: -110px;
  filter:drop-shadow(2px 4px 6px #000);
}

#about-dev {
  display: inline-block;
  font-size: 20px;
  width: 40%;
  text-align: left;
  vertical-align: top;
  padding: 0 50px;
}

#about-dev > h1 {
  margin-bottom: 20px;
}

.bold {
  font-weight: 900;
}

#about-dev > p {
  line-height: 1.6;
  margin: 10px 0;
}

.about-divider {
  width: 80%;
  margin-top: 50px;
}

#contact-btn {
  padding: 10px 20px;
  border: 5px solid black;
  border-radius: 10px;
  text-decoration: none;
  display: inline-block;
  margin-top: 50px;
  color: #fff;
  background-color: #000;
  font-weight: 700;
}

#contact-btn:hover {
  background-color: #fff;
  color: #000;
}

#interest {
  display: inline-block;
  text-align: left;
  width: 20%;
  float: right;
}

@media screen and (max-width: 1140px) {
  #about-img {
    margin-left: -200px;
  }
}

@media screen and (max-width: 768px) {
  #about-dev {
    width: 70%;
    padding: 50px;
  }
}
</style>

<script>
export default {};
</script>

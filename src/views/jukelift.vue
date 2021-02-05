<template>
  <div id="shopee">
    <div class="banner-con">
      <h1>JukeLift</h1>
      <p>Uplift your mood!</p>
      <div id="jukelift-banner">
        <img src="../assets/actual_jukelift.jpg" alt="Jukelift Banner" />
      </div>
      <div class="banner-des">
        <div class="tools">
          <h4 class="uppercase">Tools</h4>
          <p>Adobe Illustrator, Photoshop,<br>Rhino, Arduino, Raspberry Pi 3,<br> LED Lights, Plywood</p>
          <p></p>
        </div>
        <div class="role">
          <h4 class="uppercase">role</h4>
          <p>UX Designer</p>
          <p>Programmer</p>
          <h4 class="uppercase" id="team">team</h4>
          <p>2 UX Designers</p>
          <p>2 Product Designers</p>
          <p>1 Systems Developer</p>
          <p>1 Architect</p>
        </div>
        <div class="timeline">
          <h4 class="uppercase">timeline</h4>
          <p>3 Months</p>
        </div>
      </div>
    </div>
    <div class="hor-proj-info" id="overview">
      <h1>Overview</h1>
      <!-- <hr class="header-underline"> -->
      <p>
        This is the main coursework for our Innovation by Design module. The
        theme given this year was "Play". We would need to come out with a
        product revolving around "Play."
      </p>
    </div>
    <div class="hor-proj-info" id="double-diamond">
      <img src="../assets/doubleDiamond.jpg" alt="Double Diamond Framework" />
      <p>
        We approached the problem using the double diamond design framework which
        focuses on the 4Ds;
      </p>
      <p class="highlighted" >Discover, Define, Develop, Deliver.</p>
    </div>
    <div id="discover-background">
      <div class="hor-proj-info" id="discover-con">
        <div id="discover-des">
          <div id="discover-header">
            <h1>Discover</h1>
          </div>
          <p>
            As the theme given is broad, we started to find popular current issues
            that is arising right now that can be solved through play. After much
            research, we decided to focus on tackling one of modern problems in
            a dense city like Singapore; unknown or at times, unfriendly neighbours.
            Graciousness among neighbours is reducing among Singaporeans and a
            study done by Strait Times News showed alarming statistics regarding
            this.
          </p>
          <img
            src="../assets/neighbours_prob.png"
            alt="Graciousness statistics"
          />
        </div>

        <div id="discover-user-needs">
          <h2>User Needs Analysis</h2>
          <h3>Questionnaires</h3>
          <p>
            We gathered 81 responses and found that the results percentage were
            close to what was reported in Strait Times News.
          </p>
          <div class="survey-con">
            <div class="survey-info">
              <p class="survey-num">41.6%</p>
              <p class="survey-text">
                Says Hi Once or twice to neighbours in a week.
              </p>
            </div>
            <div class="survey-info">
              <p class="survey-num">73%</p>
              <p class="survey-text">
                Feels it is a big problem not knowing your neighbours
              </p>
            </div>
            <div class="survey-info">
              <p class="survey-num">32.6%</p>
              <p class="survey-text">
                Encounter neighbours mostly in the lift
              </p>
            </div>
          </div>
          <div id="user-obs">
            <h3>User Observation</h3>
            <p>
              To better understand how a neighbourhood move and interact, we
              monitored several neighbourhood for a few hours everyday for a week
              and we realized that lift landing has the most traffic among other
              places in the neighbourhood. The window of interaction at the lift
              landing was 15s whereas it varies between 15s - 1min in the lift.
            </p>
            <img src="../assets/lift_landing.gif" alt="Lift Landing Observation" />
          </div>
          <div id="user-journey">
            <h3>User Journey</h3>
            <p>
              Based on the user observation, we mapped out the user journey of the
              typical resident in a HDB neighbourhood area.
            </p>
            <div id="user-journey-image">
              <img src="../assets/user_journey.png" alt="User journey" />
            </div>
          </div>
          <div id="key-takeaways">
            <h3>Key Takeaways</h3>
            <li>
              Many felt that interaction is important but found it difficult to
              take the first step
            </li>
            <li>
              Advancement in technology has resulted in fall of interactions among
              residents
            </li>
            <li>Most interactions happen in the lift and lift landing</li>
            <li>Smiling is the first step towards positive interaction</li>
            <li>
              Interactions is lower in newer estates with the younger generations
              less likely to interact
            </li>
          </div>
        </div>
      </div>
    </div>
    <div id="define-background">
      <div class="hor-proj-info" id="define">
        <div id="user-personas-jukelift">
          <h1>define</h1>
          <h3>User Personas</h3>
          <p>
            We created 9 Personas to represent the wide range of end-users living in
            a typical neghbourhood estate. Both typical users and extreme users were
            considered when creating these personas.
          </p>
          <div id="jukelift-personas-img">
            <img
              src="../assets/jukelift_user_personas.png"
              alt="Jukelift User Personas"
            />
          </div>
        </div>
        <div id="define-affinity">
          <h3>Affinity Diagram</h3>
          <p>
            Using the Affinity Diagram Method, we came up with interesting ideas
            and keywords to help us refine our opportunity statement. We
            identified important factors such as
            <span>privacy, trust, bonding session.</span>
          </p>
          <img src="../assets/affinity_diagram.png" alt="Affinity Diagram" />
          <h3 id="hierarchy">Hierarchy of Purpose</h3>
          <p>
            With a better understanding of situation, the team decided to review
            our initial opportunity statement using the Hierarchy of Purpose
            method. We eventually narrowed down to one problem statement to focus
            on.
          </p>
          <img src="../assets/hierarchy_purpose.png" alt="Hiearchy of Purpose" />
        </div>
        <div class="hor-proj-info" id="jukelift-prob">
          <h1>problem statement</h1>
          <p>
            "How might we encourage positive interaction amongst residents <br>(through
            play)?"
          </p>
        </div>
      </div>
    </div>
    <div id="develop-background">
      <div class="hor-proj-info" id="develop">
        <h1>develop</h1>
        <h3>C-Sketch</h3>
        <p>
          Using the C-Sketch method, each of us provided an idea and the idea is
          iterated by every single one of us. Among all the ideas we came up with,
          we decided to go with Idea 2 (Jukelift) as it was closest idea to
          solving the problem. We also held meetings with the stakeholders which
          they provided feedback and preferred the Jukelift idea over the rest
          too. We felt that it was less invasive, less aggressive and more easily
          acceptable by the public.
        </p>
        <img src="../assets/csketch.png" alt="C-Sketch" />
        <p>
          The concept of the Jukelift idea were translated into an Activity
          Diagram to get a clearer picture on how we can approach to deliver the
          prototype.
        </p>
        <img src="../assets/activity_diagram.png" alt="Activity Diagram" />
      </div>
    </div>
    <div id="deliver-background">
      <div class="hor-proj-info" id="deliver">
        <h1>Deliver</h1>
        <h3>Conceptualizing Prototype</h3>
        <p>
          The aim of the juke lift is to have interactions with the people inside
          and to entertain. By doing so, team capitalize the curiosity and
          competitiveness. The final prototype we decided to build a lift made in
          wood. Team build a wooden lift and tested it with 9 panels. Initially
          the plan was to have the sensors on the roof of the lift to trigger the
          lights and music with using pressure sensors. Arduino and Raspberry Pi 3
          was used to program and control the pressure sensors, lightings and
          music.
        </p>
        <img src="../assets/cad_jukelift.png" alt="CAD Jukelift" />

        <h3>Developing Prototype</h3>
        <div id="prototype-stages">
          <img
            src="../assets/develop_prototype1.png"
            alt="Developing Prototype Programming"
          />
          <img
            src="../assets/develop_prototype2.png"
            alt="Developing Prototype Floorplan"
          />
          <img
            src="../assets/develop_prototype3.jpg"
            alt="Developing Prototype Structure"
          />
        </div>
        <div id="final-prototype">
          <h3>Final Prototype</h3>
          <img src="../assets/final_prototype.gif" alt="Final Prototype Demo" />
        </div>
      </div>
    </div>
    <div class="hor-proj-info">
      <h1>further development</h1>
      <p>
        The prototype is designed catering to the majority able-bodied
        residents. We do hope to readjust the pressure sensors system to
        accomodate wheelchair residents as well in the short-term. For the long
        term, we are looking to use computer vision to further improve the
        activation system of the lights and music in the long run.
      </p>
    </div>
    <hr class="section-divider"/>
    <div class="hor-proj-info">
      <h1>what i learned</h1>
      <h3>Understanding Limitations and Constraints</h3>
      <p>
        The initial user observation helped us understand the limitation we have
        and how we should design our idea with it in mind. We had many crazy
        ideas in the beginning but it was not realistic to implement them as the
        time limitation as well as privacy concerns limited them. However, we
        managed to overcome it and came up with a idea revolving around the
        limitation. It is a good experience to learn that limitation and
        constraints is not necessarily a negative factor. It may even push your
        ideation process to greater heights.
      </p>
    </div>
  </div>
</template>

<style>
#shopee {
  font-size: 1.2em;
  line-height: 1.6;
}

#hifi-proto {
  text-align: center;
  margin: 50px 0;
}

#hifi-proto > img {
  width: 100%;
}

#jukelift-banner {
  background-color: #eea87b;
  padding: 50px;
  height: 700px;
  margin-top: 50px;
}

#jukelift-banner > img {
  margin-top: 40px;
}

#double-diamond {
  text-align: center;
  padding-top: 0;
}

#double-diamond > p:first-of-type {
  margin-top: 50px;
}

#discover-user-needs {
  margin-top: 150px;
}

#discover-user-needs > p {
  font-size: 1.2em;
}

#discover-user-needs > h2 {
  margin-bottom: 10px;
}

#discover-des > img {
  width: 450px;
  margin: -70px 0 0 10%;
}

#discover-des > p {
  width: 50%;
  display: inline-block;
  font-size: 1.2em;
  
  vertical-align: top;
}

#user-obs, #user-journey, #key-takeaways {
  margin-top: 100px;
}

#user-obs > img {
  margin-top: 50px;
  display: block;
  width: 80%;
  margin: 50px auto 0 auto;
}

#user-journey-image {
  text-align: center;
  margin-top: 50px;
}
#user-journey-image > img {
  width: 100%;
}
#jukelift-personas-img {
  text-align: center;
  margin-top: 50px;
}

#define-affinity > img {
  width: 100%;
  margin-top: 30px;
}

#define-affinity {
  margin-top: 100px;
}

#hierarchy {
  margin-top: 100px;
}

#define-user-needs > img {
  width: 80%;
}

#jukelift-prob {
  text-align: center;
  border: 5px solid #000;
  border-radius: 20px;
  margin-top: 100px;
  padding: 50px;
}


#develop > img {
  display: block;
  width: 70%;
  margin: 50px auto 100px auto;
}

#develop > img:last-of-type {
  margin-bottom: 0;
}

#deliver > img:first-of-type {
  display: block;
  width: 50%; 
  margin: 50px auto;
}

#prototype-stages {
  text-align: center;
}

#prototype-stages > img {
  width: 25%;
  margin: 50px 20px;
}

#final-prototype > img {
  width: 50%;
  display: block;
  margin: 50px auto 0 auto;
}

#discover-background {
  background-color: #30a5c420;
}

#define-background {
  background-color: #b3479220;
}

#develop-background {
  background-color: #ebc20020;
}

#deliver-background {
  background-color: #6f539e20;
}

.header-underline {
  height: 5px;
  background-color: #f5f5f5;
  width: 100px;
  text-align: left;
}

@media screen and (max-width: 1140px) {
  #discover-des > p {
    width: 100%;
  }

  #discover-des > img {
    margin: 0;
  }

  #discover-user-needs {
    margin-top: 100px;
  }
}


@media screen and (max-width: 768px) {
  #jukelift-banner > img {
    width: 100%;
  }

  #jukelift-banner {
    height: 500px;
  }

  #double-diamond > img {
    width: 100%;
  }

  #discover-des > img {
    display: block;
    width: 80%;
    margin: 50px auto 0 auto;
  }

  #discover-des > p {
    width: 100%;
  }
  #user-journey-image > img, #jukelift-personas-img > img, #develop > img {
    width: 100%;
  }

  #deliver > img:first-of-type {
    width: 70%; 
}
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
          content1: "UX Designer",
          content2: "Programmer",
          content3: "Graphic Designer",
        },
        {
          title: "team",
          content1: "2 UX Designers",
          content2: "2 Product Designers",
          content3: "1 Systems Developer",
          content4: "1 Architect",
        },
        {
          title: "tools",
          content1: "Adobe Illustrator, Photoshop",
          content2: "Rhino, Arduino, Raspberry Pi3",
        },
      ],
    };
  },
};
</script>

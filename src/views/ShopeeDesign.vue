<template>
  <div id="shopee">
    <div class="banner-con">
      <h1>Shopee Design Challenge</h1>
      <p>Engaging 2021 Local Consumers</p>
      <div id="shopee-banner"></div>
      <div class="banner-des">
        <div class="tools">
          <h4 class="uppercase">Tools</h4>
          <p>Figma, Illustrator</p>
          <p>Telegram</p>
        </div>

        <div class="role">
          <h4 class="uppercase">role</h4>
          <p>UI/UX Designer</p>
          <h4 id="team" class="uppercase">team</h4>
          <p>3 UI/UX Designers</p>
        </div>

        <div class="timeline">
          <h4 class="uppercase">timeline</h4>
          <p>2 weeks</p>
        </div>
      </div>
    </div>
    <div class="hor-proj-info" id="overview">
      <h1>Overview</h1>
      <p>
        Shopee is one of the leading e-commerce platform in Southeast Asia and
        Taiwan, connecting consumers, sellers, and businesses across 7 markets
        in the region. They continue to strive being the preferred e-commerce
        platform in the region and looking to build upon their success. Shopee
        Design Challenge encourages new ideas and creativity to push Shopee
        further into greater heights.
      </p>
    </div>
    <div class="hor-proj-info" id="prob-state">
      <h1>problem statement</h1>
      <p>
        "How do we engage the 2021 Local Consumer so that Shopee continues to be
        the preferred e-commerce platform?"
      </p>
    </div>
    <div class="hor-proj-info">
      <h1>research findings</h1>
      <p>
        To better understand the consumer's experience with Shopee, we conducted
        3 several research methods; Survey, User interview, App Walkthrough,
        Competitor Analysis.
      </p>
      <p class="num-indicate"></p>
      <h2>01 Online Survey</h2>
      <p>
        We conducted an online survey to find out consumers' shopping experience
        with Shopee. We garnered 39 responses and found out recurring pain
        points they faced.
      </p>
      <div class="survey-con">
        <div class="survey-info">
          <p class="survey-num">71.8%</p>
          <p class="survey-text">
            Found unaccurate Product Specifications & Presentation
          </p>
        </div>
        <div class="survey-info">
          <p class="survey-num">64.1%</p>
          <p class="survey-text">
            Find it hard to trust Seller's Credibility
          </p>
        </div>
        <div class="survey-info">
          <p class="survey-num">74.4%</p>
          <p class="survey-text">
            Always look out for product reviews first before buying.
          </p>
        </div>
      </div>
      <p class="user-persona-des">
        Based on the online survey results demographic, we created 3 personas
        which fit the common consumers. We used the User Personas as a guideline
        to identify the right participants for our user interview & mobile app
        walkthrough.
      </p>
      <div class="user-persona-con">
        <img
          class="user-persona"
          src="../assets/ragul_user.png"
          alt="Ragul User Persona"
        />
        <img
          class="user-persona"
          src="../assets/sean_user.png"
          alt="Sean User Persona"
        />
        <img
          class="user-persona"
          src="../assets/sarah_user.png"
          alt="Sarah User Persona"
        />
      </div>
      <h2>02 Mobile App Walkthrough & User Interview</h2>
      <p>
        We identified 5 users with similar traits as per user persona and
        conducted a mobile app walkthrough to understand their user journey
        better. Each participant were tasked to use the Shopee app as though
        they are shopping normally; from the beginning stage of searching for
        the product in mind until the add-to-cart stage.
      </p>
      <div id="walkthrough-con">
        <img
          src="../assets/shopee_walkthrough.gif"
          alt="app walkthrough"
          id="walkthrough"
        />
      </div>
      <div id="mkt-con">
        <p id="mkt-img-des">
          Users were asked to several questions regarding their shopping
          experience and we found the same pain point that was highlighted; The
          product image is a marketing image and it does not provide them with
          the right feel of how the product is going to turn out once it is
          delivered to them
        </p>
        <img src="../assets/mkt_img.png" alt="Product Marketing Image" />
      </div>
      <p>
        All of them would go down to the product review section straight after
        viewing the images at the top section.
      </p>
      <p>
        Based on the findings, we came up with a refined problem statement;
      </p>
      <p class="highlighted">
        "How can we improve sellers' credibility to gain buyers' trust?"
      </p>
      <h2>03 Existing Solutions</h2>
      <p>
        We had found out that Shopee had been making efforts to improve sellers'
        credibility consistently. There are features such as the preferred label
        on the product to indicate verified seller with Shopee and also star
        ratings for sellers. However, these features are hardly apparent or
        realized by users. Hence, it has been ineffective in improving the
        sellers' credibility.
      </p>
      <div class="exist-sol">
        <img
          src="../assets/preferred.png"
          alt="preferred banner"
          id="preferred"
        />
        <img
          src="../assets/ratings_profile.png"
          alt="Ratings profile"
          id="ratings"
        />
        <img
          src="../assets/stars_profile.png"
          alt="Sellers profile"
          id="stars-profile"
        />
      </div>
    </div>
    <div id="solution-bg">

      <div class="hor-proj-info" id="our-solution">
        <h1>our solution</h1>
        <p>
          We started off with a mindmap to explore possible features related to
          sellers' credibility.
        </p>
        <div id="mindmap">
          <img src="../assets/mindmap_shopee.jpeg" alt="Shopee Mindmap" />
        </div>
        <p>
          We narrowed down all the solutions we have and decided on one that was
          the most innovative and realistic to implement;
          <span class="highlighted">Unboxing Product Video</span>
        </p>
        <h3 id="unboxing-title">Unboxing Product Video</h3>
        <p>
          The idea of unboxing arises due to the popularity of unboxing videos in
          other platforms like Youtube and Facebook. Users tend to go to the
          product review section or head to Youtube to see the unboxing product so
          that they know what they will get when the product is delivered. Hence,
          if the Seller can provide a similar real-life unboxing, this can further
          convince the user of the product and the seller's credibility
        </p>
        <div id="unboxing-img">
          <img src="../assets/unboxing.gif" alt="unboxing gif" />
        </div>
        <p>
          We created a mid-fidelity prototype as we wanted to identify if users
          would actually identify the unboxing video as a new feature or not. We
          tested several prototype and realized that users don't notice about the
          unboxing video button or know that they can now view an unboxing video.
          Therefore, to make it seemless and noticeable, the best way was to place
          the unboxing video straight at the top section together with images.
        </p>

        <div id="unboxing-test">
          <img src="../assets/unbox_pop.png" alt="unbox pop" />
          <img src="../assets/unbox_btn.png" alt="unbox button" />
        </div>
      </div>
    </div>
    <div class="hor-proj-info">
      <h1>Final Product</h1>
      <h3>Seller's Journey</h3>
      <div class="seller-jn">
        <img src="../assets/seller1.png" alt="Seller's Profile Page" />
        <p><i class="arrow right"></i></p>
        <img src="../assets/seller2.png" alt="Seller's Start Page" />
        <p><i class="arrow right"></i></p>
        <img src="../assets/seller3.png" alt="Seller's Load Page" />
        <p><i class="arrow right"></i></p>
        <img src="../assets/seller4.png" alt="Unbox Video Guidelines" />
      </div>
      <h3>Customer's Journey</h3>
      <div class="customer-jn">
        <img src="../assets/customer1.png" alt="Customer's Product Search " />
        <p><i class="arrow right"></i></p>
        <img src="../assets/customer2.png" alt="Unboxing Video" />
        <p><i class="arrow right"></i></p>
        <img src="../assets/customer3.png" alt="Unboxing done" />
      </div>
    </div>
    <div class="hor-proj-info">
      <h1>further development</h1>
      <p>
        There is more room for the unboxing video feature to evolve into a
        popular and trustworthy component that Users refer to. As unboxing
        videos are usually done by experts or influencers, the next phase would
        be to help sellers tie in together with these influencers so that it
        would attract their fan base to Shopee app as well. This will further
        drive more traffic to the product page and increase the sellers'
        credibility.
      </p>
    </div>
    <hr class="section-divider"/>
    <div class="hor-proj-info">
      <h1>what i learned</h1>
      <h3>Always Validate Assumptions</h3>
      <p>
        We initially thought that people would recognize the unboxing video
        button and will automatically click on it. However, we came to realize
        that there are so many features on ecommerce apps like Shopee that users
        usually hard recognize anything that they do not use before. Hence,
        testing out the mid-fidelity prototype helped us to identify exactly
        what catches them and ensure that the feature gets used and seamless.
      </p>
    </div>
  </div>
</template>

<style>

.uppercase {
  text-transform: uppercase;
}
#shopee {
  font-size: 1.2em;
  line-height: 1.6;
}

.banner-con {
  width: 80%;
  margin: 50px auto 0 auto;
}

.banner-con > h1 {
  font-size: 2.6em;
}

#shopee-banner {
  background-image: url("../assets/shopee_banner.png");
  height: 700px;
  background-position: center;
  margin-top: 50px;
}

.banner-des {
  background-color: #f6f6f6;
  color: #000;
  border-radius: 0 0 20px 20px;
  margin-top: -80px;
}

.tools,
.role,
.timeline {
  display: inline-block;
  width: 30%;
  vertical-align: top;
  padding: 50px 20px;
}

#team {
  margin-top: 40px;
}

#prob-state {
  background-color: #e0eded;
  padding: 100px 50px;
  text-align: center;
  max-width: 100%;
}

.hor-container {
  text-align: left;
  color: #000;
}

h1,
h2,
h3,
h4 {
  margin: 0;
}

p {
  margin: 0;
}

.hor-proj-info h1 {
  text-transform: uppercase;
  display: inline-block;
  font-size: 1.8em;
  padding-bottom: 10px;
  border-bottom: 5px solid #000;
  margin-bottom: 10px;
}

.hor-proj-info > h2 {
  margin: 50px 0 10px 0;
}

.hor-proj-info > p {
  font-size: 1.2em;
}

.hor-proj-info {
  padding: 100px 50px;
  margin: 0 auto;
  max-width: 75%;
  text-align: left;
}

/* .hor-proj-info > hr {
  border: 1px solid #9475e5;
  width: 70%;
  margin-top: 3em;
  margin-bottom: 3em;
} */
.survey-con {
  margin-top: 20px;
  text-align: center;
}

.survey-info {
  text-align: center;
  padding: 0 50px;
  width: 20%;
  display: inline-block;
  vertical-align: top;
}


.survey-num {
  font-size: 3em;
  font-weight: 900;
  margin-top: 30px;
}

.survey-text {
  font-size: 1.2em;
  margin-top: 10px;
}

.user-persona-con {
  text-align: center;
}

.user-persona {
  width: 40%;
  padding: 10px;
  display: inline-block;
}

.user-persona-des {
  margin: 50px 0 30px 0;
}

#mindmap > img {
  width: 60%;
  margin: 40px 0;
}

#mindmap {
  text-align: center;
}

#overview {
  display: inline-block;
}

#mkt-con {
  display: grid;
  margin: 50px 0 100px 0;
  grid-template-columns: auto auto;
}

#mkt-con > img {
  border-radius: 20px;
  border: 4px solid #000;
  box-shadow: 4px 4px 30px #aeb4b9;
  margin-left: 100px;
}

#mkt-img-des {
  padding-top: 70px;
  vertical-align: top;
  font-size: 1.2em;
}

#walkthrough-con {
  text-align: center;
  padding: 50px 0 150px 0;
}

#walkthrough {
  width: 700px;
}

.highlighted {
  background-color: rgb(238, 77, 45, 0.3);
  display: inline-block;
  text-transform: uppercase;
}

.exist-sol {
  margin: 50px 0;
  text-align: center;
}

#ratings {
  width: 300px;
  height: 569px;
  margin: 0 60px;
}

#stars-profile {
  width: 300px;
  height: 569px;
}

#preferred,
#stars-profile,
#ratings {
  border-radius: 20px;
  border: 4px solid #000;
  box-shadow: 4px 4px 30px #aeb4b9;
}

#solution-bg {
  background-color: #e0eded;
}

#unboxing-title {
  margin: 40px 0 20px 0;
}

#unboxing-img {
  text-align: center;
  margin: 50px 0;
}

#unboxing-img > img,
#unboxing-test > img {
  border-radius: 20px;
  border: 4px solid #000;
  box-shadow: 4px 4px 30px #aeb4b9;
  margin: 0 40px;
}

#unboxing-test {
  text-align: center;
  margin: 50px 0;
}

.customer-jn,
.seller-jn {
  text-align: center;
  margin: 30px 0;
}

.customer-jn > img, .seller-jn > img {
  width: 20%;
  margin: 20px;
  border-radius: 20px;
  border: 4px solid #000;
  box-shadow: 4px 4px 30px #aeb4b9;
}


.section-divider {
  background-color: #477971;
  height: 1px;
  width: 60%;
  margin: 50px auto 20px auto;
}

.seller-jn > p, .customer-jn > p {
  display: inline-block;
  vertical-align: top;
  margin-top: 18%;
}

.arrow {
  border: solid black;
  border-width: 0 5px 5px 0;
  display: inline-block;
  padding: 5px;
  vertical-align: middle;
}

.right {
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
}

@media screen and (max-width: 768px) {
  .tools,
  .role,
  .timeline {
    width: 80%;
    padding: 40px 20px 0 20px;
  }

  .timeline {
    padding-bottom: 40px;
  }

  .hor-proj-info {
    padding: 50px;
  }

  #mindmap > img {
    width: 100%;
  }

  #walkthrough {
    width: 100%;
  }

  .user-persona {
    width: 100%;
  }

  .survey-info {
    padding: 0;
    width: 80%;
  }

  .survey-num {
    font-size: 2.2em;
    font-weight: 900;
    margin-top: 30px;
  }

  .survey-text {
    font-size: 1em;
  }

  .exist-sol > img {
    margin: 20px auto;
    width: 100%;
  }

  #ratings {
    margin: 0;
  }
  
  #mkt-con {
    grid-template-columns: auto;
    margin: 0 0 70px 0;
  }

  #mkt-con > img {
    margin: 50px auto 0 auto;
    width: 80%;
  }

  #walkthrough-con {
    padding: 50px 0 0 0;
  }

  #unboxing-test > img {
    margin: 20px 0;
    width: 80%;
  }

  #unboxing-img > img {
    margin: 0;
    width: 80%;
  }

  .customer-jn > img, .seller-jn > img {
    width: 25%;
  }

  .customer-jn > img:nth-of-type(3), .seller-jn > img:nth-of-type(3) {
    margin-left: 0;
  }

}
</style>

<script>
export default {
  name: "ShopeeDesign",
};
</script>

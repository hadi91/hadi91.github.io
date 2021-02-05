<template>
  <div class="bottom-nav">
    <p id="in-touch">Let's get in touch!</p>
    <a href="" id="email-btn">ahmad_nurhadi@hotmail.com</a>
    <div class="icons-con">
      <a href="https://www.linkedin.com/in/ahmad-nurhadi/"><img src="../assets/linkedin.png" alt="LinkedIn Icon"></a>
      <a href="https://github.com/hadi91"><img src="../assets/github.png" alt="Github Icon"></a>
      <a href=""><img src="../assets/dribble.png" alt="Dribble Icon"></a>
    </div>
    <p id="copyright" class="underline">&#60;/&#62; and designed by Hadi.</p>
  </div>
</template>

<style scoped>
.bottom-nav {
  text-align: center;
  padding: 100px 0 20px 0;
}

#email-btn {
  padding: 15px 20px;
  border: 5px solid #3f3a43;
  border-radius: 25px;
  font-size: 18px;
  display: inline-block;
  margin-bottom: 16px;
  text-decoration: none;
  box-shadow: 12px 12px 16px 0 rgba(0, 0 ,0, 0.25),
  -8px -8px 12px 0 rgba(255, 255 ,255, 0.3);
  /* color: #4fdff7; */
  color: #fff;
  background-color: #000; 
  font-weight: 600;
}

.icons-con > a > img {
  width: 50px;
}

.icons-con > a:nth-of-type(2) {
  display: inline-block;
  margin: 0 20px;
}

#in-touch {
  font-size: 1.2em;
  margin-bottom: 20px;
}

#copyright {
  margin-top: 20px;
}

</style>
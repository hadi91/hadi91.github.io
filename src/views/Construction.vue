<template>
  <div class="construction">
    <div id="hi">
      <p id="down-rocket">&#128640;</p>
      <div id="construction-text">
        <h3>Welcome to Hadi's portfolio website!</h3>
        <div id="construction-body">
          <p>My portfolio is blasting into the future with a cosmic update.</p>
          <p>Get ready to explore soon &#10024;</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>

.construction {
  padding: 16px;
}

#construction-body > p {
  margin: 0px;
}

#construction-text {
  margin-top: -40px;
}

#construction-text > h3 {
  margin: 16px;
}


#down-rocket {
  font-size: 6em;
  transform: rotate(314deg);
  margin-top: 20px;
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
export default {
  name: "Construction",
};
</script>

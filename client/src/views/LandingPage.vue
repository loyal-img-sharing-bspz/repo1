<template>
  <div class="row landing-page">
    <div class="col-md-6 d-flex flex-column justify-content-center p-5">
      <h2 class="title-landing">Image Recognition</h2>
      <p
        class="sub-title"
      >Image Recognition is a set of pre-trained models available through the API. Thanks to easy algorithms assignment, developers can start using them</p>
      <button
        type="button"
        class="btn btn-outline-light align-self-start p-2"
        @click="$emit('gotoImagePage','imageList')"
      >GET STARTED</button>
    </div>
    <div class="col-md-6 d-flex justify-content-center align-items-center">
      <img
        src="../assets/img/undraw_meet_the_team_e5b7.svg"
        alt="image-landing"
        class="img-landing"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "LandingPage"
};
</script>

<style>
.landing-page {
  height: 100vh;
  width: 100vw;
}
.img-landing {
  width: 90%;
  height: 90%;
  display: block;
  margin: 20px auto;
}
.title-landing {
  font-family: "Bungee Inline", cursive;
  font-size: 42px;
  color: #ffffff;
}
.sub-title {
  font-size: 18px;
  font-weight: 700;
  color: #ffffff;
}
</style>
<template>
  <div>
    <Navbar @toUpload="page = $event" @toHomepage="page = $event"></Navbar>
    <LandingPage v-if="page === 'landingPage'" @gotoImagePage="changePage"></LandingPage>
    <ImageList v-if="page === 'imagePage'" @sendId="openDetail"></ImageList>
    <detailCard v-if="page=='detailPage'" :id="id"></detailCard>
    <ImgUpload v-if="page == 'uploadPage'" @sendId="openDetail"></ImgUpload>
  </div>
</template>

<script>
import Navbar from "./components/navbar";
import detailCard from "./components/detailCard";
import ImageList from "./views/ImageList";
import LandingPage from "./views/LandingPage";
import ImgUpload from "./components/ImgUpload";

export default {
  components: {
    ImageList,
    LandingPage,
    Navbar,
    detailCard,
    ImgUpload
  },
  data() {
    return {
      page: "landingPage",
      id: ''
    };
  },
  methods: {
    changePage() {
      this.page = "imagePage";
    },

    openDetail(id) {
      this.id = id
      this.page = 'detailPage'
    }
  }
};
</script>

<style>
body {
  background-image: url("http://images.unsplash.com/photo-1557682224-5b8590cd9ec5?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
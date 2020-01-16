<template>
  <div class="container list-page">
    <h2 class="title-page">Uploaded Photo</h2>
    <div class="row mx-auto justify-content-center">
      <ImageCard v-for="(item, i) in listSrc" v-bind:key="i" v-bind:image="item" />
    </div>
  </div>
</template>

<script>
import ImageCard from "../components/ImageCard";
export default {
  name: "ImageList",
  data() {
    return {
      listSrc: [
        "https://picsum.photos/300/200",
        "https://picsum.photos/400/200",
        "https://picsum.photos/300/700",
        "https://picsum.photos/300/800",
        "https://picsum.photos/500/700"
      ]
    };
  },
  components: {
    ImageCard
  }
};
</script>

<style scoped>
.list-page {
  padding: 30px 15px;
}
.title-page {
  text-align: center;
  color: #fff;
  font-size: 2.4em;
  margin-bottom: 25px;
}
</style>
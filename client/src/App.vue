<template>
  <div>
    <navbar></navbar>
    <ImageList></ImageList>
    <detailCard></detailCard>
  </div>
</template>

<script>
import navbar from "./components/navbar";
import detailCard from "./components/detailCard";
import ImageList from "./views/ImageList";
export default {
  components: {
    navbar,
    ImageList
  }
};
</script>

<style>
</style>
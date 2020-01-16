<template>
  <div>
    <navbar></navbar>
    <detailCard></detailCard>
  </div>
</template>

<script>
import navbar from "./components/navbar";
import detailCard from "./components/detailCard";

export default {
  components: {
    navbar,
    detailCard
  },
  data() {
    return {
      message: "hello world"
    };
  }
};
</script>

<style>
</style>
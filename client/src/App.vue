<template>
  <div>
    <navbar></navbar>
    <h1>{{message}}</h1>
  </div>
</template>

<script>
import navbar from "./components/navbar";

export default {
  components: {
    navbar
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
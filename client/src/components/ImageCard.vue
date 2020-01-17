<template>
  <div class="card col-md-3 image-card">
    <img v-bind:src="image" alt="list-image" class="list-image" @click="$emit('sendId', imageId)" />
  </div>
</template>

<script>
export default {
  name: "ImageCard",
  props: {
    image: String,
    imageId: String
  }
};
</script>

<style>
.image-card {
  padding: 5px;
  height: 200px;
  width: 300px;
  margin: 5px;
}
.image-card:hover {
  cursor: pointer;
  position: relative;
  z-index: 3;
  transform: scale(1.2);
}
.list-image {
  height: 100%;
  width: 100%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  object-fit: cover;
}
</style>
<template>
  <div class="d-flex justify-content-center mt-5">
    <b-card no-body class="overflow-hidden" style="min-width: 1000px; min-height: 500px">
      <b-row no-gutters>
        <b-col md="6">
          <b-card-img :src="this.img" class="rounded-0"></b-card-img>
        </b-col>
        <b-col md="6">
          <b-card-body title="People Detection">
            <b-card-text>umur : {{umur}}</b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      img: "https://picsum.photos/400/400/?image=20",
      umur: "data umur"
    };
  },
  methods: {}
};
</script>

<style>
</style>
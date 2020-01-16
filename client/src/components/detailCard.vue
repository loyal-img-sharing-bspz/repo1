<template>
  <div>
    <div class="card-container">
      <div class="card-content bg-dark text-white">
        <img
          class="card-img"
          :src="img"
          alt="Card image"
          style="max-width:600px; max-height: 400px"
        />
        <div class="card-img-overlay">
          <h4 class="card-title">Umurnya : {{age}}</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      img:
        "https://dearevanhansen.com/wp-content/uploads/2019/01/AndrewBarthFeldman_cNathanJohnson.jpg",
      age: 20
    };
  },
  props: {
    id: String
  },
  methods: {
    getDataDetail() {
      axios({
        url: `http://localhost:3000/person/${this.id}`,
        method: "GET"
      })
        .then(({ data }) => {
          this.img = data.person.image;
          this.age = data.person.age;
        })
        .catch(err => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: "<a href>Why do I have this issue?</a>"
          });
        });
    }
  }
};
</script>

<style>
.card-container {
  position: relative;
}
.card-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transition: box-shadow 0.3s;
  transform: translate(-50%, 25%);
}
.card-container:hover {
  /* transform: scale(0.9); */
  box-shadow: 0 0 11px black;
}
.card-title {
  color: #48b883;
}
</style>
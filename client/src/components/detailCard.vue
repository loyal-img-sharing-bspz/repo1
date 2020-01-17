<template>
  <div>
    <div class="title">
      <p>People Detection</p>
    </div>
    <div class="box gallery">
      <div class="card">
        <div class="background">
          <img class="picture" :src="img" />
        </div>
        <a href="#">
          <i class="fa fa-camera-retro"></i>
        </a>
        <div class="info">
          <h2>Age : {{age}}</h2>
          <div class="foot">
            <i class="line"></i>
            <span class="date">{{createdAt}}</span>
            <a href="#" target="_blank" class="social">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" target="_blank" class="social">
              <i class="fab fa-facebook"></i>
            </a>
          </div>
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
      age: 20,
      createdAt: "dibuat"
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
          this.createdAt = data.person.createdAt;
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

<style scoped>
.title {
  margin: 50px auto 0 auto;
  text-align: center;
  color: #fff;
  font-size: 32px;
}

.gallery.box {
  width: 320px;
  height: 405px;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 1%;
  border: 10px #fff solid;
}

.gallery .card {
  position: relative;
}

.gallery .background,
.gallery .column {
  height: 405px;
}

.gallery .column {
  width: 20%;
  float: left;
}

.gallery .overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0;
  background-color: #000;
  -webkit-transition: opacity 0.35s;
  -o-transition: opacity 0.35s;
  transition: opacity 0.35s;
}

.gallery .info,
.gallery .foot {
  -webkit-transition: bottom 0.35s;
  -o-transition: bottom 0.35s;
  transition: bottom 0.35s;
}

.gallery .info {
  position: absolute;
  bottom: -35px;
  width: 100%;
}

.gallery .info h2 {
  line-height: 24px;
  font-size: 18px;
  padding: 0 10px;
  font-weight: 400;
  color: #fff;
}

.gallery .foot {
  height: 35px;
  bottom: -35px;
  position: relative;
  color: #fff;
  padding: 0 10px;
}

.gallery .foot .social {
  float: right;
  color: #fff;
  font-size: 20px;
  margin-left: 20px;
}

.gallery .foot .line {
  height: 2px;
  display: block;
  margin: 10px 0;
  background-color: #fff;
  margin-top: 20px;
  width: 0%;
  transition: width 0.6s;
}

.gallery .date {
  font-weight: 300;
}

.gallery .fa-camera-retro {
  top: 0;
  left: 0;
  padding: 10px 10px;
  position: absolute;
  color: #fff;
  font-size: 24px;
  z-index: 1;
  transition: font-size 0.35s;
}

/* All hovers here! */
.gallery:hover .info,
.gallery:hover .foot {
  bottom: 10px;
}

.gallery:hover .overlay {
  opacity: 0.5;
}

.gallery:hover .foot .line {
  width: 100%;
}

.gallery:hover .fa-camera-retro {
  font-size: 32px;
}
</style>
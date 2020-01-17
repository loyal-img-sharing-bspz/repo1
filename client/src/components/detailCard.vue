<template>
  <div>
    <div class="title">
      <p>People Detection</p>
    </div>
    <div class="box gallery">
      <div class="card">
        <div class="background">
          <img class="picture card-img-top" :src="img" style="max-width:390px; min-height:395px;" />
        </div>
        <a href="#">
          <i class="fa fa-camera-retro"></i>
        </a>
        <div class="info text-white">
          <h2 style="color:white !important;">Age : {{age}}</h2>
          <h2>similarities : {{similarities}}</h2>
          <div class="foot">
            <i class="line"></i>
            <span class="date">{{createdAt}}</span>
            <a class="twitter-share-button fab fa-twitter social" href="https://twitter.com/intent/tweet?text=See%20Your%20Age%20Using%20People-Age%20Detection%20http://linkWebsite"></a>
            <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore social">
            <div
              class="fb-share-button"
              :data-href="img"
              data-layout="button"
              data-size="large">
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
      img: "",
      age: null,
      createdAt: "",
      similarities: ""
    };
  },
  props: {
    id: String,
  },
  methods: {
    getDataDetail() {
      axios({
        url: `http://18.219.119.178:55555/person/${this.id}`,
        method: "GET"
      })
        .then(({ data }) => {
          this.img = data.person.image;
          this.age = data.person.age;
          this.createdAt = data.person.createdAt;
          this.similarities = data.person.similarities[0].name

          console.log(data.person)
        })
        .catch(err => {
          // Swal.fire({
          //   icon: "error",
          //   title: "Oops...",
          //   text: "Something went wrong!",
          //   footer: "<a href>Why do I have this issue?</a>"
          // });
        });
    }
  },

  created() {
    this.getDataDetail()
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
  border: 10px rgba(0, 0, 0, 0.328) solid;
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
  background-color: rgb(255, 253, 253);
  -webkit-transition: opacity 0.35s;
  -o-transition: opacity 0.35s;
  transition: opacity 0.35s;
}

/* .gallery .info {},400
  -o-transition: bottom 0.35s;
  transition: bottom 0.35s;
} */

.gallery .info {
  position: absolute;
  bottom: -35px;
  width: 100%;
}

.gallery .info h2 {
  line-height: 24px;
  font-size: 18px;
  padding: 0 10px;
  font-weight: 700;
  color: white;
}

.gallery .foot {
  height: 35px;
  bottom: -35px;
  position: relative;
  padding: 0 10px;
  font-weight: 500;
  color: white;
}

.gallery .foot .social {
  float: right;
  color: rgb(4, 0, 255);
  font-size: 20px;
  margin-left: 20px;
  margin-bottom: 5px;
}

.gallery .foot .line {
  height: 2px;
  display: block;
  margin: 10px 0;
  background-color: rgb(255, 33, 3);
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
  color: rgb(255, 255, 255);
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
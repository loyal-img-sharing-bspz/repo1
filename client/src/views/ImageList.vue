<template>
  <div class="container list-page">
    <h2 class="title-page">Uploaded Photo</h2>
    <!-- SEARCH BAR -->
    <input
      type="text"
      class="form-control mb-4 search-bar mx-auto"
      id="searchBar"
      autocomplete="off"
      placeholder="Search Image By Category"
      v-model="search"
    />
    <!--  -->
    <div class="row mx-auto justify-content-center">
      <ImageCard
        v-for="(item, i) in searchArticleComputed"
        v-bind:key="i"
        v-bind:image="item.image"
        :imageId="item._id"
        @sendId="$emit('sendId', $event)"
      />
    </div>
  </div>
</template>

<script>
import ImageCard from "../components/ImageCard";
export default {
  name: "ImageList",
  computed: {
    searchArticleComputed() {
      // let searchArticle = this.listArticle
      return this.listSrc.filter(element =>
        element.category.toLowerCase().includes(this.search.toLowerCase())
      );
    }
  },
  data() {
    return {
      search: "",
      // listSrc: [
      //   {
      //     imageUrl: "https://picsum.photos/300/200",
      //     category: "Human"
      //   },
      //   {
      //     imageUrl: "https://picsum.photos/400/200",
      //     category: "Home"
      //   },
      //   {
      //     imageUrl: "https://picsum.photos/300/700",
      //     category: "Monkhey"
      //   },
      //   {
      //     imageUrl: "https://picsum.photos/500/700",
      //     category: "Animal"
      //   }
      // ]
      listSrc: []
    };
  },
  methods: {
    fetchFromServer() {
      axios({
        method: "get",
        url: "http://18.219.119.178:55555/person/"
      })
        .then(({ data }) => {
          this.listSrc = data.people;
          // console.log(data.people);
        })
        .catch(err => {
          console.log(err);
        });
    },

    sendId(id) {
      console.log('at sendId', id)
    }
  },
  components: {
    ImageCard
  },
  created() {
    this.fetchFromServer();
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
.search-bar {
  width: 50%;
  display: block;
}
</style>
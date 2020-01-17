<template>
  <div>
    <div class="mx-auto col-sm-6">
      <div id="msg"></div>
      <form method="post" id="image-form">
        <input type="file" name="img[]" class="file" accept="image/*" ref="fileInput" @change="imgUploaded" />
        <div class="input-group my-3">
          <input type="text" class="form-control" disabled placeholder="Upload File" id="file" v-model="fileName"/>
          <div class="input-group-append">
            <button type="button" class="btn btn-primary" id="browse" @click="$refs.fileInput.click()">Browse...</button>
          </div>
        </div>
      </form>
    </div>
    <div class="mx-auto col-sm-6">
      <div class="mx-auto d-flex">
        <img src id="preview" class="img-fluid mx-auto" />
      </div>
    </div>
    <div class="mx-auto col-sm-6 mt-2">
        <div class="mx-auto d-flex">
          <button type="submit" class="btn btn-success mx-auto" v-show="isToUpload" @click.prevent="onUpload" :disabled="disableButton">Upload</button>
        </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  data: function() {
    return {
      imgFile: "",
      fileName: "",
      isToUpload: false,
      disableButton: false
    }
  },
  methods: {
    imgUploaded: function(event) {
      this.imgFile = event.target.files[0];
      this.fileName = this.imgFile.name;
      var reader = new FileReader();
      reader.onload = function (e) {
          // get loaded data and render thumbnail.
          document.getElementById("preview").src = e.target.result;
      };
      // read the image file as a data URL.
      reader.readAsDataURL(this.imgFile);
      this.isToUpload = true;
    },
    onUpload: function() {
      this.disableButton = true;
      const fd = new FormData();
      fd.append("image", this.imgFile, this.imgFile.name);

      axios.post("http://18.219.119.178:55555/imgUpload", fd)
        .then(({data}) => {
          return axios({
            method: "post",
            url: "http://18.219.119.178:55555/person",
            data: {
              image: data.image
            }
          })
        })
        .then(({data}) => {
          // console.log(data.person);
          this.$emit('sendId', data.person._id)
        })
        .catch((err) => {
          console.error(err);
        })
    }
  }
};
</script>

<style scoped>
.file {
  visibility: hidden;
  position: absolute;
}
</style>
<template>
  <div class="login">
    <div v-if="image" class="image-preview-wr">
      <div class="image-preview">
        <div class="container">
          <img
            :src="image"
            class="image-pr"
          />
        </div>
        <div class="im-actions">
            <div @click="remove" class="im-delete">
                Delete
            </div>
            <div @click="keep" class="im-keep">
                Save
            </div>
        </div>
      </div>
    </div>
    <div class="login-card">
      <div class="ll-title">Add Project</div>
      <div style="margin-bottom: 15px" class="ll-label">Image</div>
      <label class="browse">
        <input
          class="file-input"
          type="file"
          multiple
          @change="onChange"
          ref="file"
          accept=".jpg, .jpeg, .png"
        />
        <div :class="addStyle">
            <svg v-if="addStyle == 'saved-image-text'" xmlns="http://www.w3.org/2000/svg" class="check-icon" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
            {{ imageStatus }}
        </div>
      </label>
      <div style="margin-top: 15px" class="ll-label">Title</div>
      <div class="input-wr">
        <input
          placeholder="Adventurer"
          type="text"
          class="inp"
        />
      </div>

      <div class="ll-label">Description</div>
      <div class="input-wr">
        <textarea
          class="inp"
          placeholder="A new project"
          cols="30"
          rows="4"
        ></textarea>
        <!-- <input type="text" class="inp" /> -->
      </div>

      <div class="ll-submit">Add Project</div>
      <div @click="closeAddProjects" class="ll-back">Never Mind</div>
    </div>
  </div>
</template>

<script>
import store from "../../store";

export default {
  data() {
    return {
      image: null,
      marker: "marker",
      filelist: [],
      imageStatus: 'Add image',
      addStyle: "add-image-text"
    };
  },

  methods: {
    closeAddProjects() {
      this.remove()
      store.dispatch("changeAddProjectState", false);
    },

    onChange(event) {
      this.filelist = [...this.$refs.file.files];
      var files = event.target.files;
      this.createFile(files[0]);
    },

    createFile(file) {
      if (!file.type.match("image.*")) {
        alert("Select an image");
        this.marker = "marker";
        return;
      }
      // var img = new Image();
      var reader = new FileReader();
      var vm = this;

      reader.onload = function (e) {
        vm.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },

    remove() {
      this.marker = "marker";
      this.image = "";
      this.filelist = [];
    },

    keep() {
      this.imageStatus = "Image saved"
      this.addStyle = "saved-image-text"
      this.marker = "marker";
      this.image = "";
      this.filelist = [];
    },

    dragover(event) {
      event.preventDefault();
      // Add some visual fluff to show the user can drop its files
      this.marker = "marker-hover";
    },

    dragleave() {
      // Clean up
      this.marker = "marker";
    },

    drop(event) {
      event.preventDefault();
      var files = event.dataTransfer.files;
      this.createFile(files[0]);
      this.onChange(); // Trigger the onChange event manually
      // Clean up
      this.marker = "marker";
    },
  },
};
</script>

<style scoped>
@import "../../styles/Login.css";
</style>
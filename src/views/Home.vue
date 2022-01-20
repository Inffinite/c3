<template>
  <div class="home">
    <Navbar />
    <Hello />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Hello from "../components/Hello.vue";

export default {
  components: {
    Navbar,
    Hello,
  },
};
</script>

<style scoped>
@import "../styles/Home.css";
</style>
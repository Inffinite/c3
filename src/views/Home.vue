<template>
  <div class="home">
    <Navbar />
    <Hello />
    <Focus/>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Hello from "../components/Hello.vue";
import Focus from '../components/Focus.vue'

export default {
  components: {
    Navbar,
    Hello,
    Focus
  },
};
</script>

<style scoped>
@import "../styles/Home.css";
</style>
<template>
  <div class="home">
    <Navbar />
    <Hello />
    <Focus/>
    <WhatWeDo/>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Hello from "../components/Hello.vue";
import Focus from '../components/Focus.vue'
import WhatWeDo from '../components/WhatWeDo.vue'

export default {
  components: {
    Navbar,
    Hello,
    Focus,
    WhatWeDo
  },
};
</script>

<style scoped>
@import "../styles/Home.css";
</style>
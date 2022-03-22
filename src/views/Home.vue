<template>
  <div class="home">
    <div v-if="dashboardState" class="dashboard">
      <Navbar />
      <Hello />
      <Focus />
      <Approach />
      <WhatWeDo />
      <ContactMenu />
    </div>

    <div v-if="projectsPageState" class="projectsPage">
      <Projects/>
    </div>
    <!-- <Footer/> -->
  </div>
</template>

<script>
import store from '../store'
import Navbar from "../components/Navbar.vue";
import Hello from "../components/Hello.vue";
import Focus from "../components/Focus.vue";
import WhatWeDo from "../components/WhatWeDo.vue";
import ContactMenu from "../components/ContactMenu";
import Approach from "../components/Approach";
import Projects from "../components/Projects";
// import Footer from '../components/Footer.vue'

export default {
  components: {
    Navbar,
    Hello,
    Focus,
    Approach,
    WhatWeDo,
    ContactMenu,
    Projects,
    // Footer
  },

  data(){
    return {
      
    }
  },

  computed: {
    dashboardState: () => {
      return store.getters.getDashboardState
    },

    projectsPageState: () => {
      return store.getters.getProjectsPageState
    },
  }
};
</script>

<style scoped>
@import "../styles/Home.css";
</style>
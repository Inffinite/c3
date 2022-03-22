<template>
  <div class="focus">
    <div class="focus-subtitle">Building the future</div>
    <div class="focus-title"><span class="thin">Our</span> Focus</div>
    <div>
      <div class="f-list">
      <div v-for="(project, i) in projects" :key="i" class="f-item">
        <img
          class="f-item-img"
          :src="project.imageUrl"
          alt=""
        />
        <div class="f-item-title">{{project.title}}</div>
        <div class="f-item-subtitle">
          {{ project.desc }}
        </div>
      </div>
    </div>
    </div>

    <div class="container">
      <div @click="projectsPage" class="more-btn">More</div>
    </div>
  </div>
</template>

<script>
import store from '../store'

export default {
  data(){
    return {
      projects: [
        {
          title: "No Poverty",
          desc: "Access to basic human needs of health, education, sanitation.",
          imageUrl: "https://i.imgur.com/ACD3eIe.jpg"
        },
        {
          title: "Good Health",
          desc: "Better, more accessible health systems to increase life-expectancy.",
          imageUrl: "https://i.imgur.com/8WHFCY2.jpg"
        },
        {
          title: "Gender Equality",
          desc: "Education regardless of gender and advancement of equality laws.",
          imageUrl: "https://i.imgur.com/je6tYbW.jpg"
        },
        // {
        //   title: "Quality Education",
        //   desc: "Inclusive education to enable upward social mobility and end poverty.",
        //   imageUrl: "https://i.imgur.com/1VtSxwg.jpg"
        // },
      ]
    }
  },

  computed: {
  },

  methods: {
    projectsPage(){
      store.dispatch('changeDashboardState', false)
    }
  }
};
</script>

<style>
@import "../styles/Focus.css";
</style>
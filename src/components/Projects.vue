<template>
  <div class="projects">
    <AddProject v-if="addprojects"/>
    <div class="p-control-wr">
      <div class="p-control">
        <div @click="back" class="p-back">
          <svg xmlns="http://www.w3.org/2000/svg" class="p-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back
        </div>
        <div @click="openAddProjects" class="p-add-project">
          <svg xmlns="http://www.w3.org/2000/svg" class="p-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
          </svg>
          Add Project
        </div>
      </div>
    </div>
    <div class="p-content">
      <div class="container">
        <div class="p-last">Last updated 2 days ago</div>
      </div>
      <div class="container">
        <div class="p-title">Our <span>Projects</span></div>
      </div>
      <div class="container">
        <div class="p-subtitle">Past projects we have worked on</div>
      </div>

      <div style="margin-top: 80px; margin-bottom: 120px;"> 
        <div class="f-list">
          <div v-for="(project, i) in projects" :key="i" class="f-item">
            <img class="f-item-img" :src="project.imageUrl" alt="" />
            <div class="f-item-title">{{ project.title }}</div>
            <div class="f-item-subtitle">
              {{ project.desc }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from '../store'
import AddProject from "./widgets/AddProject.vue"

export default {
  data() {
    return {
      projects: [
        {
          title: "No Poverty",
          desc: "Access to basic human needs of health, education, sanitation.",
          imageUrl: "https://i.imgur.com/ACD3eIe.jpg",
        },
        {
          title: "Good Health",
          desc: "Better, more accessible health systems to increase life-expectancy.",
          imageUrl: "https://i.imgur.com/8WHFCY2.jpg",
        },
        {
          title: "Gender Equality",
          desc: "Education regardless of gender and advancement of equality laws.",
          imageUrl: "https://i.imgur.com/je6tYbW.jpg",
        },
        {
          title: "Quality Education",
          desc: "Inclusive education to enable upward social mobility and end poverty.",
          imageUrl: "https://i.imgur.com/1VtSxwg.jpg",
        },
      ],
    };
  },

  computed: {
    addprojects: () => {
      return store.getters.getAddProjectsPage
    }
  },

  components: {
    AddProject
  },

  methods: {
    back(){
      store.dispatch("changeProjectsPageState", false)
    },

    openAddProjects(){
      store.dispatch('changeAddProjectState', true)
    },

    closeAddProjects(){
      store.dispatch('changeAddProjectState', false)
    },
  }
};
</script>

<style>
@import "../styles/Projects.css";
@import "../styles/Global.css";
@import "../styles/Focus.css";
</style>
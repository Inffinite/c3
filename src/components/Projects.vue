<template>
  <div class="projects">
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

      <div style="margin-top: 80px; margin-bottom: 80px;"> 
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
};
</script>

<style>
@import "../styles/Projects.css";
@import "../styles/Global.css";
@import "../styles/Focus.css";
</style>
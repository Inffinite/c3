<template>
  <div class="navbar">
    <div class="n-brand">
      <img class="c-logo" src="../assets/mylogo.png" alt="c" />
    </div>

    <svg
      @click="contactMe"
      xmlns="http://www.w3.org/2000/svg"
      class="n-menu-icon"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
      />
    </svg>
    <div class="n-actions">
      <!-- <div class="flat-btn">Mission</div>

      <div
        class="flat-btn"
      >Our Approach</div>

      <div class="flat-btn">What we do</div> -->
      <div class="register-btn">Fund a project</div>
      <div class="register-btn">Blog</div>
      <div @click="contactsMenuStatus" class="contact-btn">Contact us</div>
    </div>
  </div>
</template>

<script>
import store from "../store";

export default {
  methods: {
    async contactMe() {
      var status = await store.getters.getContactsMenu;

      switch (status) {
        case true:
          await store.dispatch("changeContactState", false);
          break;

        case false:
          await store.dispatch("changeContactState", true);
          break;

        default:
          break;
      }
    },

    async contactsMenuStatus() {
      const status = await store.getters.getContactsMenu;

      switch (status) {
        case true:
          await store.dispatch("changeContactState", false);
          break;

        case false:
          await store.dispatch("changeContactState", true);
          break;

        default:
          break;
      }
    }
  }
};
</script>

<style>
@import "../styles/Navbar.css";
</style>
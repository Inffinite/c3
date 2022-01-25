<template>
  <div class="navbar">
    <div class="n-brand">
      <img class="c-logo" src="../assets/mylogo.png" alt="c" />
    </div>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="n-menu-icon"
      viewBox="0 0 20 20"
    >
      <path
        fill-rule="evenodd"
        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
        clip-rule="evenodd"
      />
    </svg>
    <div class="n-actions">
      <div class="flat-btn">Mission</div>

      <div class="flat-btn">Our Approach</div>

      <div class="flat-btn">What we do</div>
      <div @click="contactsMenuStatus" class="contact-btn">Contact us</div>
    </div>
  </div>
</template>

<script>
import store from "../store";
export default {
  methods: {
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
    },
  },
};
</script>

<style>
@import "../styles/Navbar.css";
</style>
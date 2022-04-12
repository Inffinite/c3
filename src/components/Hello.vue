<template>
  <div @click="helloClicked" class="hello">
    <div class="h-details">
      <div class="h-tag-wr">
        <div class="h-tag">CORPORATE CITIZENSHIP CONNECT</div>
      </div>
      <div class="h-first">Act Responsibly</div>
      <div class="h-second">Think Sustainably</div>

      <div class="h-subtitle">
        We identify, plan, manage and execute projects that are aligned with
        <span class="green">Sustainable Development Goals.</span>
      </div>

      <div class="h-actions">
        <div class="container">
          <a href="/files/c3.pdf" download>
            <div class="findout">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="pdf-icon"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
                clip-rule="evenodd"
              />
            </svg>

            Download PDF
          </div>
          </a>
        </div>
        <!-- <div class="container">
          <div class="h-pdf">
            Businesses cannot thrive in societies that fail
          </div>
        </div> -->
      </div>
    </div>
    <div class="h-pic">
      <img class="h-image" src="../assets/combo.png" alt="" />
    </div>
  </div>
</template>

<script>
import store from "../store";

export default {
  methods: {
    async helloClicked() {
      const status = await store.getters.getContactsMenu;

      switch (status) {
        case true:
          await store.dispatch("changeContactState", false);
          break;

        default:
          break;
      }
    },
  },
};
</script>

<style scoped>
@import "../styles/Hello.css";
</style>
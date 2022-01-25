<template>
  <div v-if="contactsMenu" class="contact-menu">
    <div class="contact-tile">
      <div class="cm-number">
        +254 757 690 940
      </div>
      <div @click="copyContact(1)" class="cm-copy">
        {{ copyOne }}
      </div>
    </div>

    <div class="cm-divider"></div>

    <div class="contact-tile">
      <div class="cm-number">
        +254 757 690 940
      </div>
      <div @click="copyContact(2)" class="cm-copy">
        {{ copyTwo }}
      </div>
    </div>
  </div>
</template>

<script>
import store from '../store'

export default {
  data(){
    return {
      copyOne: 'Copy',
      copyTwo: 'Copy'
  }
  },
  
  computed: {
    contactsMenu: () => {
      return store.getters.getContactsMenu
    }
  },

  methods: {
    async copyContact(pos){
      switch (pos) {
        case 1:
          this.copyOne = 'Copied!'
          await navigator.clipboard.writeText('0757690940')
          setTimeout(() => {
            this.copyOne = 'Copy'
          }, 2000);
          break;

        case 2:
          this.copyTwo = 'Copied!'
          await navigator.clipboard.writeText('0757690940')
          setTimeout(() => {
            this.copyTwo = 'Copy'
          }, 2000);
          break;
      
        default:
          break;
      }

      
    },
  }
};
</script>

<style>
@import "../styles/ContactMenu.css";
</style>
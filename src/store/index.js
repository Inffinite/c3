import Vue from 'vue'
import Vuex from 'vuex'
import Menus from './Menus.js'
import Pages from './Pages.js'

Vue.use(Vuex)

export default new Vuex.Store({
  namespaced: true,
  modules: {
    Menus,
    Pages
  }
})
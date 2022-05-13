import Vuex,{ Store } from "vuex"
import Vue from 'vue';
import aside from './aside';
Vue.use(Vuex);

export default new Store({
  modules:{
    aside,
  }
})
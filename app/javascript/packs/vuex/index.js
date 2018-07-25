import Vue from 'vue/dist/vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import MapStore from './stores/map_store';

const store = new Vuex.Store({
  modules: {
    MapStore
  }
});

export default store;

import Vue from 'vue/dist/vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import MapStore from './stores/map_store';
import LocationStore from './stores/location_store';

const store = new Vuex.Store({
  modules: {
    MapStore,
    LocationStore
  }
});

export default store;

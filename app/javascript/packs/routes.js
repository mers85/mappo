import Vue from 'vue/dist/vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import HomeIndex from './components/home/index.vue';
import MapsIndex from './components/maps/index.vue';

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: HomeIndex, name: 'root_path' },
    { path: '/maps', component: MapsIndex, name: 'maps_path' }

  ]
});

export default router;

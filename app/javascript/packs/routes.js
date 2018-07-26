import Vue from 'vue/dist/vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import HomeIndex from './components/home/index.vue';
import MapsIndex from './components/maps/index.vue';
import MapShow from './components/maps/show.vue';
import MapNew from './components/maps/new.vue';
import MapEdit from './components/maps/edit.vue';

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: HomeIndex, name: 'root_path' },
    { path: '/maps', component: MapsIndex, name: 'maps_path' },
    { path: '/maps/new', component: MapNew, name: 'new_map_path' },
    { path: '/maps/:id/edit', component: MapEdit, name: 'edit_map_path' },
    { path: '/maps/:id', component: MapShow, name: 'map_path' }


  ]
});

export default router;

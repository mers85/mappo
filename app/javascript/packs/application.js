/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

//import Vue from 'vue'
import Vue from 'vue/dist/vue';
import store from './vuex';
import router from './routes.js';
import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.GOOGLE_MAPS_API_KEY,
    libraries: "places" // necessary for places input
  }
});


$.ajaxSetup({
  beforeSend: function(xhr) {
    //xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'));
  },
  complete: function(xhr, status) {
    if(xhr.status === 200 || xhr.status === 422) {
      return true;
    }
    if(xhr.status === 404) {
      return window.location.href = '/404';
    }

    return window.location.href = '/500';
  }
})
$.ajaxPrefilter(function( options ) {
  options.url = `/api/v1/${options.url}`;
});


const app = new Vue({
  router,
  store
}).$mount('#app')

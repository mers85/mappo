<template>
  <layout>
    <section class="jumbotron text-center mt-0">
      <div class="container fondo pt-5 my-5">
        <h1 class="jumbotron-heading">Mappo</h1>
        <p class="text-white heading">Web application to share created routes around the world.</p>
        <p>
          <router-link :to="{ name: 'new_map_path' }" class="btn btn-primary my-2" exact>Add new map</router-link>
          <router-link :to="{ name: 'maps_path' }" class="btn btn-secondary my-2" exact>View all maps</router-link>
        </p>
      </div>
    </section>
    <div class="album py-5 bg-light">
      <div class="container">
        <div class="row">
          <card-mappo
            v-for="(map, index) in maps"
            v-bind:key="index"
            v-bind:map="map"
            >
          </card-mappo>
        </div>
      </div>
    </div>
  </layout>
</template>

<script>
  import Layout from '../shared/layout';
  import CardMappo from '../shared/card-mappo';

  export default {
    components: {
      'layout': Layout,
      'card-mappo': CardMappo
    },
    data: function() {
      return this.$store.state.MapStore;
    },
    mounted: function() {
      this.$store.dispatch('MapStore/index');
    }
  }
</script>

<style>
  .jumbotron {
      background-image:url('../../assets/map_001.jpg');
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
       border-radius: 0px;
      position: relative;

  }

  .jumbotron-heading {
    font-weight: 400;
  }
  .fondo {
    background: rgba(4,4,4,0.45);
    background-attachment: scroll;
  }

  .jumbotron .container {
    max-width: 40rem;
    color: white;
  }
</style>

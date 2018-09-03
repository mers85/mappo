<template>
  <layout>
    <section class="jumbotron text-center mt-0">
      <div class="container">
        <h1 class="jumbotron-heading">Album example</h1>
        <p class="lead text-white">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>
        <p>
          <a href="#" class="btn btn-primary my-2">Main call to action</a>
          <a href="#" class="btn btn-secondary my-2">Secondary action</a>
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
      background-position: center top;
       border-radius: 0px;
  }

  .jumbotron-heading {
    font-weight: 300;
  }

  .jumbotron .container {
    max-width: 40rem;
    color: white;
  }
</style>

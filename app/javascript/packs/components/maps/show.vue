<template>
  <layout>
    <div class="container mt-5 mb-4 py-3">
      <div class='row mt-3'>
        <div class="col-8">
          <h2>{{ map.name }}</h2>
        </div>
        <div class="col-4 ">
          <router-link :to="{ name: 'new_location_path' }" class="float-right btn btn-outline-secondary btn-sm " >Add locations</router-link>
          <router-link :to="{ name: 'edit_map_path' }" class="float-right btn btn-outline-secondary btn-sm mr-2" >Edit</router-link>
        </div>
      </div>
      <div class="row">
        <div class="col-12 mt-3 show">
          <image-map v-bind:map_id="map.id" v-bind:locations="map.locations" ></image-map>
          <p class="mt-3 text-muted">{{ map.description}}</p>
        </div>
      </div>
    </div>
  </layout>
</template>

<script>
import Layout from '../shared/layout';
import Imagemap from '../shared/_image-map';

export default {
  name: 'MapShow',
  components: {
    'layout': Layout,
    'image-map': Imagemap
  },
  data: function() {
    return this.$store.state.MapStore
  },
  mounted: function() {
    this.$store.dispatch('MapStore/show', this.$route.params.id);
  }

}
</script>

<style scoped>

  h2 {
    font-family: monospace;
  }
  p {
    font-family: monospace;
    font-size: 20px;
  }

</style>

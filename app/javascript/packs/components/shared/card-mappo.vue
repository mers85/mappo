<template>

        <div class="col-md-4">
          <div class="card mb-4 box-shadow">
            <image-map v-bind:map_id="map.id" v-bind:locations="map.locations"></image-map>
            <div class="card-body">
              <h3 class="card-title">{{ map.name }}</h3>
              <p class="card-text">{{ map.description}}</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <router-link class="btn btn-sm btn-outline-secondary" :to="{ name: 'map_path', params: {id: map.id} }">View</router-link>
                  <router-link class="btn btn-sm btn-outline-secondary" :to="{ name: 'edit_map_path', params: { id: map.id } }">Edit</router-link>
                </div>
                <small class="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>

</template>

<script>
import Imagemap from '../shared/_image-map';

export default {
  name: 'CardMappo',
  components: {
    'image-map': Imagemap
  },
  props: [
    'map'
  ],

}
</script>


<style>
  .box-shadow {
    box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05);
  }
</style>

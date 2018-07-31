<template>
  <layout>
    <div class='col-xs-12'>
      <h2>{{ map.name }}</h2>
      <ul>
        <li> Map identification: {{ map.id }}</li>
        <li> Map description: {{ map.description}}</li>
      </ul>
    </div>
      <gmap-map
        :center="center"
        :zoom="12"
        style="width:100%;  height: 400px;">
        <gmap-marker
          :key="index"
          v-for="(l, index) in map.locations"
          :position="{lat: l.lat, lng: l.long}"
          @click="center=m.position">
        </gmap-marker>
      </gmap-map>
  </layout>
</template>

<script>
import Layout from '../shared/layout';



export default {
  components: {
    Layout
  },
  data: function() {
    return this.$store.state.MapStore;
  },

  mounted: function() {
    this.$store.dispatch('MapStore/show', this.$route.params.id);
  }
}
</script>

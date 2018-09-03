<template>
  <gmap-map v-bind:ref="'mapRef-' + map_id"
    :center="{ lat: 45.508, lng: -73.587 }"
    :zoom="12"
    style="width:100%;  height: 300px;">
    <gmap-marker
      :key="index"
      v-for="(l, index) in locations"
      :position="{lat: l.lat, lng: l.long}"
      >
    </gmap-marker>
  </gmap-map>

</template>

<script>
import {gmapApi} from 'vue2-google-maps';

  export default {
    name: 'Imagemap',
    props: [
      'locations',
      'center',
      'map_id'
    ],
    computed:{
      google: gmapApi
    },
    mounted: function(){
      let mapRef = "mapRef-" + this.map_id
      this.$refs[mapRef].$mapPromise.then((map) => {
        const bounds = new google.maps.LatLngBounds();
        //const locations = this.$store.state.MapStore.map.locations;

        this.locations.forEach(function(location) {
          const loc = new google.maps.LatLng(location.lat, location.long);
          bounds.extend(loc);
        });
        map.fitBounds(bounds);
        map.panToBounds(bounds);
      });
    }
  }
</script>

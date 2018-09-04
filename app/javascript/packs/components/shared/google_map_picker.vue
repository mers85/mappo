<template>
  <div>

    <div class="input-group mb-2">
        <div class="input-group-prepend">
          <button @click.prevent="addMarker" class="btn btn-success" type="button">Add</button>
        </div>
        <gmap-autocomplete @place_changed="setPlace">
        </gmap-autocomplete>
    </div>

    <gmap-map
      :center="center"
      :zoom="12"
      style="width:100%;  height: 400px;">
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        position="m.position"
        @click="center=m.position">
      </gmap-marker>
    </gmap-map>

  </div>

</template>

<script>
export default {
  name: "GoogleMapPicker",
  data() {
    return {
      // default to Montreal to keep it simple
      // change this to whatever makes sense
      center: { lat: 45.508, lng: -73.587 },
      markers: [],
      places: [],
      currentPlace: null
    };
  },

  mounted() {
    this.geolocate();
  },

  methods: {
    // receives a place object via the autocomplete component
    setPlace(place) {
      this.currentPlace = place;
    },
    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng(),
          address: this.currentPlace.formatted_address
        };
        console.log(marker)
        this.$store.dispatch('LocationStore/updateLocationPosition', marker)
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      }
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    }
  }
};
</script>

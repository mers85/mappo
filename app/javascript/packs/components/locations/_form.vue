<template>
  <div class="row">
    <input type="hidden" v-model="location.address" class="form-control">
    <input type="hidden" v-model="location.lat" class="form-control">
    <input type="hidden" v-model="location.long" class="form-control">
    <div class="col-7 form-group">
      <google-map-picker />
    </div>
    <div class="col-5 px-1 py-5 mt-3">

      <div class="form-group">
        <label for="locationTitle">Title</label>
        <input type="title" v-model="location.title" class="form-control" id="locationTitle">
      </div>

      <div class="form-group">
        <label for="locationDescription">Description</label>
        <input type="text-area" v-model="location.description" class="form-control" id="locationDescription">
      </div>

      <div  class="row float-left">
          <submit-tag value="save" klass="btn btn-success mx-3" :progress="progress"></submit-tag>
          <router-link :to="{ name: 'maps_path' }" class="btn btn-warning"> cancel </router-link>
      </div>

    </div>
  </div>
</template>

<script>
import SubmitTag from '../shared/_submit_tag.vue';
import GoogleMapPicker from "../shared/google_map_picker.vue";

export default {
  components: {
    'submit-tag': SubmitTag,
    'google-map-picker': GoogleMapPicker
  },
  data: function() {
    return this.$store.state.LocationStore;
  },
  created() {
    this.map_id = this.$route.params.id;
  }
}
</script>

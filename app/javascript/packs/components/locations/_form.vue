<template>
  <div>
    <input type="hidden" v-model="location.address" class="form-control">
    <input type="hidden" v-model="location.lat" class="form-control">
    <input type="hidden" v-model="location.long" class="form-control">
    <div class="form-group">
      <label for="">Title</label><br/>
      <input type="text" v-model="location.title" class="form-control">
    </div>
    <div class="form-group">
      <label for="">Description</label><br/>
      <input type="text-area" v-model="location.description" class="form-control">
    </div>
    <div class="form-group">
      <google-map-picker />
    </div>
    <router-link :to="{ name: 'maps_path' }" class="btn btn-default pull-left"> cancel </router-link>
    <submit-tag value="save" klass="btn btn-warning pull-right" :progress="progress"></submit-tag>
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

<template>
  <div>
    <div class="form-group">
      <label for="">Name</label><br/>
      <input type="text" v-model="location.title" class="form-control">
    </div>
    <div class="form-group">
      <label for="">Address</label><br/>
      <input type="text-area" v-model="location.address" class="form-control">
    </div>
    <div class="form-group">
      <label for="">Description</label><br/>
      <input type="text-area" v-model="location.description" class="form-control">
    </div>
    <div class="form-group">
      <label for="">Latitude</label><br/>
      <input type="text-area" v-model="location.lat" class="form-control">
    </div>
    <div class="form-group">
      <label for="">Longitude</label><br/>
      <input type="text-area" v-model="location.long" class="form-control">
    </div>
    <router-link :to="{ name: 'maps_path' }" class="btn btn-default pull-left"> cancel </router-link>
    <submit-tag value="save" klass="btn btn-warning pull-right" :progress="progress"></submit-tag>
  </div>
</template>

<script>
import SubmitTag from '../shared/_submit_tag.vue';

export default {
  components: {
    'submit-tag': SubmitTag
  },
  data: function() {
    return this.$store.state.LocationStore;
  },
  created() {
    this.map_id = this.$route.params.id;
  }
}
</script>

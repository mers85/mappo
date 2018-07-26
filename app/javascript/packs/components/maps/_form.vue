<template>
  <div>
    <div class="form-group">
      <label for="">Name</label><br/>
      <input type="text" v-model="map.name" class="form-control">
    </div>
    <div class="form-group">
      <label for="">Description</label><br/>
      <input type="text-area" v-model="map.description" class="form-control">
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
    return this.$store.state.MapStore;
  }
}
</script>

<template>
  <div class="row">
    <div class="col py-3 mt-3">

      <div class="form-group">
        <label for="">Name</label><br/>
        <input type="text" v-model="map.name" class="form-control">
      </div>

      <div class="form-group">
        <label for="">Description</label><br/>
        <input type="text-area" v-model="map.description" class="form-control">
      </div>

      <div class="row">
        <submit-tag value="save" klass="btn btn-success mx-3" :progress="progress"></submit-tag>
        <router-link :to="{ name: 'maps_path' }" class="btn btn-warning"> cancel </router-link>
      </div>

    </div>
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

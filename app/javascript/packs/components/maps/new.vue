<template>
  <layout>
    <div class='col-xs-12'>
      <h1>Create a new map</h1>
    </div>
    <div class='col-xs-12'>
      <form v-on:submit.prevent="create" accept-charset="UTF-8" class="form">
        <form-map></form-map>
      </form>
    </div>
  </layout>
</template>

<script>
import Layout from '../shared/layout';
import FormMap from './_form.vue';

export default {
  components: {
    'layout': Layout,
    'form-map': FormMap
  },

  data: function() {
    return this.$store.state.MapStore;
  },

  mounted: function() {
    this.$store.dispatch('MapStore/new')
  },

  methods: {
    create: function() {
      this.$store.dispatch('MapStore/create', this.map).then(
        response => {
          setTimeout(() =>
            this.$router.push({name: 'maps_path'})
          , 1000)
        }
      )
    }
  }
}
</script>

<template>
  <layout>
    <div class='col-xs-12'>
      <h2>{{ map.name }}</h2>
      <ul>
        <li> Map identification: {{ map.id }}</li>
        <li> Map description: {{ map.description}}</li>
      </ul>
    </div>
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
    this.$store.dispatch('MapStore/show', this.$route.params.id)
  }
}
</script>

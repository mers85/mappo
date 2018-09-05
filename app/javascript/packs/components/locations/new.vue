<template>
  <layout>
    <div class="container mt-5 py-3">
      <h1>Create Locations</h1>
        <form v-on:submit.prevent="create" accept-charset="UTF-8" class="form">
          <form-location></form-location>
        </form>
    </div>
  </layout>
</template>

<script>
import Layout from '../shared/layout';
import FormLocation from './_form.vue';

export default {
  components: {
    'layout': Layout,
    'form-location': FormLocation
  },

  data: function() {
    return this.$store.state.LocationStore;
  },

  mounted: function() {
   // this.$store.dispatch('MapStore/new', this.$route.params.id)
  },

  methods: {
    create: function() {
      this.$store.dispatch('LocationStore/create', [this.$route.params.id, this.location]).then(
        response => {
          setTimeout(() =>
            this.$router.push({ name: 'map_path', params: {id: this.$route.params.id} })
          , 1000)
        }
      )
    }
  }
}
</script>

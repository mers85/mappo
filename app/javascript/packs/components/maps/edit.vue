<template>
  <layout>
    <div class='col-xs-12'>
      <form v-on:submit.prevent="update" accept-charset="UTF-8" class="form">
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
    this.$store.dispatch('MapStore/show', this.$route.params.id)
  },

  methods: {
    update: function() {
      this.$store.dispatch('MapStore/update', this.map).then(
        ()=> {
          this.$store.dispatch('MapStore/index');
        }
      )
    }
  }
}
</script>

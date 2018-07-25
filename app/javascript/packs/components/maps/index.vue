<template>
  <layout>
    <div class='col-xs-12'>
      <table class='table table-striped table-thin'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
           <tr v-for='map in maps'>
             <td><router-link :to="{ name: 'map_path', params: {id: map.id} }">{{ map.name }}</router-link></td>
             <td>{{ map.description }}</td>
           </tr>
         </tbody>
       </table>
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
    this.$store.dispatch('MapStore/index');
  }
}
</script>

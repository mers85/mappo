<template>
  <layout>
    <div class='col-xs-12'>
      <router-link :to="{ name: 'new_map_path' }">Add New Map</router-link>
      <table class='table table-striped table-thin'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th colspan="2">Actions</th>
          </tr>
        </thead>
        <tbody>
           <tr v-for='map in maps'>
             <td><router-link :to="{ name: 'map_path', params: {id: map.id} }">{{ map.name }}</router-link></td>
             <td>{{ map.description }}</td>
             <td><router-link :to="{ name: 'edit_map_path', params: { id: map.id }}">Edit</router-link></td>
             <td><a href="#" @click.prevent="destroy(map.id)">Destroy</a></td>
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
  },

  methods: {
    destroy: function(map_id) {
      if(confirm('Are you sure?')) {
        this.$store.dispatch('MapStore/destroy', map_id).then(
            () => {
            this.$store.dispatch('MapStore/index');
          }
        )
      }
    }
  }
}
</script>

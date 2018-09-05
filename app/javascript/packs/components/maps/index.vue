<template>
  <layout>
    <div class="container py-5 my-5">

        <table class="table">
          <thead >
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for='(map, index) in maps' scope="row">
              <th v-bind:key="index">{{index + 1}}</th>
              <td><router-link :to="{ name: 'map_path', params: {id: map.id} }">{{ map.name }}</router-link></td>
              <td>{{ map.description }}</td>
              <td>
                <router-link :to="{ name: 'edit_map_path', params: { id: map.id }}" class="btn btn-secondary btn-sm">Edit</router-link>
                <a href="#" @click.prevent="destroy(map.id)" class="btn btn-danger btn-sm">Destroy</a>
              </td>
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

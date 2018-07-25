<template>
  <div class='row'>
    <div class='col-xs-12'>

      <h1>Mappo</h1>

      <ul class="nav nav-pills">
        <li :class="activeOn(['root_path'])">
          <router-link :to="{ name: 'root_path' }">Homepage</router-link>
        </li>
        <li :class="activeOn(['maps_path'])">
          <router-link :to="{ name: 'maps_path' }">Maps</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {

  data: function() {
    return {

    }
  },

  methods: {
    activeOn: function(paths) {
      if(paths.includes(this.$route.name)) {
        return 'active';
      } else {
        return '';
      }
    }
  }

}
</script>

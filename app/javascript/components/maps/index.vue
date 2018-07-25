<div>
  <map-card
    v-for="(map, index) in maps"
    v-bind:key="index"
    v-bind:name="map.name"
    v-bind:description="map.description"
    >
  </map-card>
</div>

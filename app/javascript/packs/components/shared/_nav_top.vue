<template>
  <nav>
    <div class="collapse bg-dark pt-5" id="navbarHeader">
      <div class="container">
        <div class="row">
          <div class="col-sm-8 col-md-7 py-4">
            <h4 class="text-white">About</h4>
            <p class="text-muted">Add some information about the album below, the author, or any other background context. Make it a few sentences long so folks can pick up some informative tidbits. Then, link them off to some social networking sites or contact information.</p>
          </div>
          <div class="col-sm-4 offset-md-1 py-4">
            <h4 class="text-white">Contact</h4>
            <ul class="list-unstyled">
              <li><router-link :to="{ name: 'maps_path' }" class="text-white" exact>Maps</router-link></li>
              <li><router-link :to="{ name: 'new_map_path' }" class="text-white" exact>Add Map</router-link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="navbar navbar-dark fixed-top fondo ">
      <div class="container d-flex justify-content-between">
        <router-link :to="{ name: 'root_path' }" class="navbar-brand d-flex align-items-center" exact>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
          <strong>Mappo</strong>
        </router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
    </div>
  </nav>
</template>

<script>

</script>

<style>
  .fondo {
    background: rgba(4,4,4,0.45);
    background-attachment: scroll;
  }

  .router-link-active {
    text-decoration: underline;
  }

</style>

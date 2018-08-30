<template>
  <layout>
    <section class="jumbotron text-center mt-0">
      <div class="container bg">
        <h1 class="jumbotron-heading">Album example</h1>
        <p class="lead text-white">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>
        <p>
          <a href="#" class="btn btn-primary my-2">Main call to action</a>
          <a href="#" class="btn btn-secondary my-2">Secondary action</a>
        </p>
      </div>
    </section>
  </layout>
</template>

<script>
  import Layout from '../shared/layout';

  export default {
    components: {
      Layout
    }
  }
</script>

<style>
  .jumbotron {
      background-image:url('../../assets/map_001.jpg');
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center top;
       border-radius: 0px;
  }
  .bg {
    background: light;
    color: white;
  }
</style>

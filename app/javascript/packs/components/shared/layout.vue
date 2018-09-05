<template>
  <div>
    <nav-top></nav-top>
    <slot/>
    <footer-mappo></footer-mappo>
  </div>
</template>

<script>
import NavTop from './_nav_top';
import FooterMappo from './_footer-mappo';

  export default {
    components: {
      'nav-top': NavTop,
      'footer-mappo': FooterMappo
    }
  }
</script>

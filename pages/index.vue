<template>
  <div>
    <Menu />
    <Banner />
    <About />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Menu from '~/components/Menu.vue';
import Banner from '~/components/Banner.vue';
import About from '~/components/About.vue';

export default Vue.extend({
  name: 'IndexPage',
  components: {
    Menu,
    Banner,
    About
  }
})
</script>

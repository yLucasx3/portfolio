<template>
  <div>
    <Menu />
    <Banner />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Menu from '~/components/Menu.vue';
import Banner from '~/components/Banner.vue';

export default Vue.extend({
  name: 'IndexPage',
  components: {
    Menu,
    Banner
  }
})
</script>

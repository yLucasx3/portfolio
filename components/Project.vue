<template>
  <div class="flex flex-col items-center justify-center pt-10 px-4">
    <p class="text-xl font-bold pt-3">Projetos</p>
    <hr class="w-16 bg-gray-300 my-5" />
    <div class="w-11/12 p-2 bg-gray-100 rounded-xl">
      <a href="https://kimochism.com" target="blank">
        <img src="images/kimochism.png" class="rounded-xl" />
      </a>

      <p class="text-xl font-bold pt-3">Kimochism</p>
      <p class="pt-3">Kimochism é um ecommerce de roupas e acessórios Geek.</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Projects',
})
</script>

<style scoped>
</style>
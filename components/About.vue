<template>
  <div>
    <div class="flex flex-col items-center justify-center pt-10 px-4 md:px-52 md:h-screen">
      <p class="text-xl font-bold pt-3">SOBRE MIM</p>
      <hr class="w-16 bg-gray-300 my-5" />
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries.
      </p>

      <div class="flex mt-6 space-x-5">
        <div class="flex justify-center items-center flex-col text-center">
          <p class="text-2xl font-semibold">10+</p>
          <span>Anos de experiência</span>
        </div>
        <div class="flex justify-center items-center flex-col text-center">
          <p class="text-2xl font-semibold">50+</p>
          <span>Projetos completos</span>
        </div>
        <div class="flex justify-center items-center flex-col text-center">
          <p class="text-2xl font-semibold">8+</p>
          <span>Empresas trabalhadas</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'About',
})
</script>

<style scoped>
</style>
<template>
  <div class="flex flex-col items-center justify-center pt-10 px-4">
    <p class="text-xl font-bold pt-3">FORMAÇÃO</p>
    <hr class="w-16 bg-gray-300 my-5" />
    <div class="w-11/12 p-4 bg-gray-100 rounded-xl">
      <div class="flex flex-col bg-white rounded-xl p-2">
        <p class="font-semibold">Análise e Des. Sistemas</p>
        <p>Fatec de Ferraz</p>
        <div class="flex items-center space-x-2">
          <img src="icons/date-range.svg" />
          <span>2019 - 2022</span>
        </div>
      </div>

      <div class="flex justify-center mt-2">
        <div class="timeline h-8"></div>
      </div>

      <div class="flex flex-col bg-white rounded-xl p-2 mt-2">
        <p class="font-semibold">Técnico em Informática</p>
        <p>Etec Guaianases</p>
        <div class="flex items-center space-x-2">
          <img src="icons/date-range.svg" />
          <span>2017 - 2018</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Formation',
})
</script>

<style scoped>

.timeline {
  width: 1px;
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(191, 153, 138, 1) 97%,
    rgba(191, 153, 138, 1) 100%
  );
}
</style>
<template>
  <div
    class="
      banner-container
      flex
      flex-col
      justify-center
      items-center
      w-screen
      md:h-screen
    "
  >
    <div
      class="
        profile-container
        flex
        justify-center
        items-center
        flex-wrap-reverse
        mt-12
        md:space-x-20
        xl:pt-0 xl:space-x-40 xl:flex-nowrap xl:flex-row
      "
    >
      <div class="flex flex-col px-4">
        <h1 class="font-bold text-xl self-start pt-6">
          Ei! Sou o Lucas Ariel.
        </h1>
        <p class="py-6 md:self-start md:w-72">
          Sou desenvolvedor Full Stack formado na Fatec. Tenho como propósito
          desenvolver soluções e agregar ao seu negócio.
        </p>
        <button class="w-32 h-10 p-1 text-sm rounded-md">Projetos ></button>
      </div>
      <img
        src="images/profile.png"
        alt="Lucas Ariel"
        class="w-36 md:w-80"
        draggable="false"
      />
    </div>
    <img
      class="w-8 justify-self-center cursor-pointer hidden md:block xl:block"
      src="icons/arrow-bottom.png"
      alt="Ir para baixo"
      draggable="false"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Banner',
})
</script>

<style scoped>

button {
  background-color: #bf998a;
  color: white;
}
</style>
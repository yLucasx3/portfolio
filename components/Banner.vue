<template>
  <div class="flex flex-col justify-center items-center w-screen h-screen">
    <div class="profile-container flex justify-center items-center flex-wrap-reverse md:space-x-20 xl:pt-0 xl:space-x-40 xl:flex-nowrap xl:flex-row">
      <div class="flex flex-col px-8 items-center">
        <h1 class="font-bold text-2xl pt-10 md:text-4xl xl:text-4xl">Ei! Me chamo Lucas Ariel.</h1>
        <p class="font-semibold pt-6 pb-6 md:self-start md:w-72">Sou desenvolvedor Full Stack e formado na Fatec. Tenho como propósito desenvolver soluções e agregar ao seu negócio.</p>
        <button class="w-32 h-10 p-1 text-sm rounded-md self-center md:self-start">
          Sobre mim
        </button>
      </div>
      <img src="images/profile.png" alt="Lucas Ariel" class="w-80" draggable="false"/>
    </div>
    <img class="w-8 justify-self-center mt-10 cursor-pointer hidden md:block xl:block" src="icons/arrow-bottom.png" alt="Ir para baixo" draggable="false"/>
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
    background-color: #BF998A;
    color: white;
  }

  @media screen and (max-width: 375px) {
    /* .profile-container {
      padding-top: 40px;
    } */

    .profile-container img {
      width: 250px;
    }
  }
</style>
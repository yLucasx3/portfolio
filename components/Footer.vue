<template>
  <div
    class="
      flex flex-col
      items-center
      justify-center
      w-screen
      h-46
      bg-black
      mt-16
      p-2
      space-y-5
    "
  >
    <p class="text-white">Lucas</p>
    <div class="flex space-x-5">
      <a href="https://www.linkedin.com/in/arielucas/" target="blank">
        <img src="icons/instagram.png" />
      </a>
      <a href="https://www.github.com/yLucasx3" target="blank">
        <img src="icons/linkedin.png" />
      </a>
      <a href="https://www.instagram.com/y_luska" target="blank">
        <img src="icons/github.png" />
      </a>
    </div>
    <span class="text-white"> © 2021 copyright Lucas Ariel </span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Footer',
})
</script>
<style scoped>
img {
  width: 24px;
}
</style>
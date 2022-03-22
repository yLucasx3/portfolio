<template>
<!-- flex items-center justify-center w-screen h-16 fixed bg-white z-10 -->
<!-- flex w-max space-x-10 items-center -->
  <div>
    <div v-if="!menuIsOpen" class="toggle-menu flex items-center ml-2">
      <img src="icons/menu.svg" class="" @click="toggleMenu()" />
    </div>
    <div v-if="menuIsOpen" class="menu-container flex flex-col w-screen h-screen fixed md:h-16 md:flex-row md:z-10 md:justify-center">
      <img src="icons/close.svg" class="self-end text-white p-4 md:hidden xl:hidden" @click="toggleMenu()" />
      <ul class="md:flex">
        <li>Home</li>
        <li>Sobre</li>
        <li>Habilidades</li>
        <li>Projetos</li>
        <li>Contato</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Menu',
  data() {
    return { 
      menuIsOpen: false
    }
  },
  mounted() {
    this.isMobile() ? this.menuIsOpen = false : this.menuIsOpen = true;
  },
  methods: {
    toggleMenu() {
      this.menuIsOpen = !this.menuIsOpen;
    },
    isMobile() {
      return window.screen.width < 768;
    }
  }
}) 
</script>

<style scoped>

  .toggle-menu {
    height: 10vh;
  }
  .menu-container { 
    background-color: #BF998A;
  }

  li {
    color: white;
    cursor: pointer;
    font-weight: 600;
    letter-spacing: 0.050em;
    padding: 20px;
  }
</style>
<template>
  <div>
    <div
      v-if="!menuIsOpen"
      class="h-12 flex items-center ml-2 fixed bg-white w-screen"
    >
      <img src="icons/menu.svg" class="" @click="toggleMenu()" />
    </div>
    <div
      v-if="menuIsOpen"
      class="
        menu-container
        flex flex-col
        w-screen
        h-screen
        fixed
        md:h-16 md:flex-row md:z-10 md:justify-center
      "
    >
      <img
        src="icons/close.svg"
        class="self-end text-white pr-2 md:p-4 md:hidden xl:hidden"
        @click="toggleMenu()"
      />
      <ul class="md:flex">
        <li>Home</li>
        <li>Sobre</li>
        <li>Habilidades</li>
        <li>Educação</li>
        <li>Experiência Profissional</li>
        <li>Projetos</li>
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
      menuIsOpen: false,
    }
  },
  mounted() {
    this.isMobile() ? (this.menuIsOpen = false) : (this.menuIsOpen = true)
  },
  methods: {
    toggleMenu() {
      this.menuIsOpen = !this.menuIsOpen
    },
    isMobile() {
      return window.screen.width < 768
    },
  },
})
</script>

<style scoped>

.menu-container {
  background-color: #bf998a;
}

li {
  color: white;
  cursor: pointer;
  font-weight: 600;
  letter-spacing: 0.05em;
  padding: 20px;
}
</style>
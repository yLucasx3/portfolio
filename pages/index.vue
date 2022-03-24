<template>
  <div>
    <Menu />
    <Banner />
    <About />
    <Skill />
    <Work />
    <Formation />
    <Project />
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Menu from '~/components/Menu.vue'
import Banner from '~/components/Banner.vue'
import About from '~/components/About.vue'
import Skill from '~/components/Skill.vue'
import Work from '~/components/Work.vue'
import Formation from '~/components/Formation.vue'
import Project from '~/components/Project.vue'
import Footer from '~/components/Footer.vue'

export default Vue.extend({
  name: 'IndexPage',
  components: {
    Menu,
    Banner,
    About,
    Skill,
    Work,
    Formation,
    Project,
    Footer,
  },
})
</script>

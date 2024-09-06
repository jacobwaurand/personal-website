<script lang="ts">
import IntroPage from './pages/IntroPage.vue';
import MainMenu from './pages/MainMenu.vue'
import { defineComponent } from 'vue';
import { store } from './store/store';
import { mapState } from 'pinia';

export default defineComponent({
  components: { IntroPage, MainMenu },
  computed: {
    ...mapState(store, ['activePage'])
  }
})
</script>

<template>
  <IntroPage v-if="activePage === ''"/>
  <MainMenu v-else/>
</template>

<style>
html, body, #app :root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  max-height: 100vh;
  height: 100vh;

  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #282828;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

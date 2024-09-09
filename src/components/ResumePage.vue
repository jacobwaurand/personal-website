<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  components: {},
  props: {
    page: { default: 'Resume', type: String }
  },
  methods: {
  }
})
</script>

<template>
  <div class="bg-surface-900 p-4 rounded-md">
    <div class="text-4xl font-bold mb-2">Jacob Aurand</div>
    <div class="text-sm font-bold">
      <span class="text-surface-400 mr-2 hover:text-surface-100"><font-awesome-icon class="mr-2" icon="envelope"/>Jacobwaurand@gmail.com</span>
      <span class="text-surface-400 mr-2 hover:text-surface-100"><font-awesome-icon class="mr-2" icon="phone"/>770-630-3091</span>
      <span class="text-surface-400 mr-2 hover:text-surface-100"><font-awesome-icon class="mr-2" icon="globe"/>Atlanta, Georgia</span>
    </div>
  </div>
</template>

<style scoped>

</style>

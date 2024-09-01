<script lang="ts">
import { defineComponent } from 'vue';
import LeftPanel from './LeftPanel.vue';

export default defineComponent({
  components: { LeftPanel },
  data() {
    return {
      results: {}
    }
  },
  methods: {
  }
})
</script>

<template>
  <div class="h-full w-full flex">
    <LeftPanel/>
    <div class="grow">Main Content</div>
  </div>
</template>

<style scoped>

</style>

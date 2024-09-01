<script setup lang="ts">

</script>

<template>
  <div class="bg-surface-700 flex flex-col w-20 content-center justify-start">
    <div v-for="index in 5" class="w-full h-20 p-3 flex flex-col align-middle text-center font-bold hover:bg-secondary hover:text-surface-900">
      <font-awesome-icon class="grow m-1" icon="coffee"/>
      Icon {{ index }}
    </div>
  </div>
</template>

<style scoped>

</style>

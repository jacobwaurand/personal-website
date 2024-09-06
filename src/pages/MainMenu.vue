<script setup lang="ts">
import PageHeader from '../components/PageHeader.vue';
import PageBody from '../components/PageBody.vue';

</script>

<template>
  <div class="h-screen w-screen
  flex flex-col">
    <PageHeader/>
    <div class="grow">
      <PageBody/>
    </div>
  </div>
</template>

<style scoped>

</style>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions } from 'pinia';
import { store } from '../store/store';

export default defineComponent({
  methods: {
    ...mapActions(store, ['setPage'])
  }
})
</script>

<template>
  <div class="h-screen w-screen
  flex flex-col  items-center justify-center">
    <div class="text-7xl font-bold">
      Jacob Aurand
      <div class="text-sm font-semibold text-surface-400">
        Software Developer
      </div>
    </div>
    <div class="m-10 w-5/12 h-32 bg-gradient-to-br from-primary to-secondary bg-opacity-75 rounded-full flex justify-around items-center">
      <div class="h-full min-w-28 flex flex-col justify-center items-center hover:text-surface-50 cursor-pointer text-surface-900" @click="setPage('Resume')">
        <font-awesome-icon class="h-3/6 pb-1" icon="file-lines"/>
        <span class="font-bold">Resume</span>
      </div>
      <div class="h-full min-w-28 flex flex-col justify-center items-center hover:text-surface-50 cursor-pointer text-surface-900" @click="setPage('Projects')">
        <font-awesome-icon class="h-3/6 pb-1" icon="diagram-project"/>
        <span class="font-bold">Projects</span>
      </div>
      <div class="h-full min-w-28 flex flex-col justify-center items-center hover:text-surface-50 cursor-pointer text-surface-900" @click="setPage('Contact')">
        <font-awesome-icon class="h-3/6 pb-1" icon="contact-card"/>
        <span class="font-bold">Contact Card</span>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>

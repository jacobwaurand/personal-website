<script lang="ts">
import { defineComponent } from 'vue';
import ResumePage from './ResumePage.vue';
import ProjectsPage from './ProjectsPage.vue';
import { mapState } from 'pinia';
import { store } from '../store/store';

export default defineComponent({
  components: { ResumePage, ProjectsPage },
  props: {
    page: { default: 'Resume', type: String }
  },
  computed: {
    ...mapState(store, ['activePage'])
  },
  methods: {
  }
})
</script>

<template>
  <div class="grow p-4 flex flex-col items-center">
    <ResumePage v-if="activePage === 'Resume'"/>
    <ProjectsPage v-if="activePage === 'Projects'"/>
  </div>
</template>

<style scoped>

</style>

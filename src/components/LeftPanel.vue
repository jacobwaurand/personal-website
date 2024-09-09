<script lang="ts">
import { mapActions, mapState } from 'pinia';
import { defineComponent } from 'vue';
import { store } from '../store/store';

const tabs = [{ text: 'Resume', icon: 'book', isActive: false },
  { text: 'Projects', icon: 'diagram-project', isActive: false },
  { text: 'Contact Me', icon: 'contact-card', isActive: false }];

export default defineComponent({
  created() {
    this.tabItems.filter(t => t.text === this.activePage)[0].isActive = true
  },
  components: { },
  data() {
    return {
      isExpanded: false,
      tabItems: tabs
    }
  },
  computed: {
    ...mapState(store, ['activePage'])
  },
  methods: {
    ...mapActions(store, ['setPage']),
    onClick(idx: number) {
      if (!this.tabItems[idx].isActive) {
        // set all tabs in active, then set the correct tab active
        this.tabItems.forEach(t => t.isActive = false);
        this.tabItems[idx].isActive = true;
        this.setPage(this.tabItems[idx].text);
      } else {
        this.isExpanded = !this.isExpanded;
      }
    },
  }
})
</script>

<template>
  <div class="flex">
    <div class="bg-surface-600 flex flex-col content-center justify-start">
      <div v-for="(tab, idx) in tabItems" class="w-full h-24 p-3 flex flex-nowrap flex-col align-middle text-center font-bold hover:bg-primary-400 hover:text-surface-900 cursor-pointer"
      :class="{ 'bg-gradient-to-br from-primary to-secondary text-surface-900 border-2 border-primary-300': tab.isActive }" @click="onClick(idx)">
        <font-awesome-icon class="grow m-1" :icon="tab.icon"/>
        {{ tab.text }}
      </div>
    </div>
    <div v-if="isExpanded" class="bg-surface-700 w-64 p-4 flex flex-col border-r-2 border-surface-500 text-xl font-bold">Expand Icons</div>
  </div>
</template>

<style scoped>

</style>

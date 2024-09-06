<script lang="ts">
import { defineComponent } from 'vue';
import LeftPanel from './LeftPanel.vue';
import MainContent from './MainContent.vue';

export default defineComponent({
  components: { LeftPanel, MainContent },
  data() {
    return {
      activePage: 'Resume'
    }
  },
  methods: {
    changePages(pageName: string){
      this.activePage = pageName;
    }
  }
})
</script>

<template>
  <div class="h-full w-full flex">
    <LeftPanel @change-pages="changePages"/>
    <MainContent :page="activePage"/>
  </div>
</template>

<style scoped>

</style>

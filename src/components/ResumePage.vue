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
  <!-- Contact Info -->
  <div class="bg-surface-900 p-4 rounded-md">
    <div class="text-2xl font-bold mb-2">Jacob Aurand</div>
    <div class="text-sm font-bold">
      <span class="text-surface-400 mr-2 hover:text-surface-100 cursor-pointer"><font-awesome-icon class="mr-2" icon="envelope"/>Jacobwaurand@gmail.com</span>
      <span class="text-surface-400 mr-2 hover:text-surface-100 cursor-pointer"><font-awesome-icon class="mr-2" icon="phone"/>770-630-3091</span>
      <span class="text-surface-400 mr-2 hover:text-surface-100 cursor-pointer"><font-awesome-icon class="mr-2" icon="globe"/>Atlanta, Georgia</span>
    </div>
  </div>
  <!-- Work Experience -->
  <div class="bg-surface-900 p-4 rounded-md mt-3">
    <div class="text-2xl font-bold">Work Experience</div>
    <div class="font-bold text-surface-300 mt-3">Nasdaq - Evestment<span class="text-surface-400 ml-2 italic">(2022 - Current)</span></div>
    <ul class="list-disc ml-4 mt-2">
      <li>Designed and deployed new features in a microservices-driven ecosystem, creating new features for clients.</li>
      <li>Mentored 2 junior developers this year to educate them on best practices and share my knowledge of our platform.</li>
      <li>Identified 10+ performance bottlenecks and designed and built solutions to improve our platform speed by roughly 20%.</li>
    </ul>
    <div class="font-bold text-surface-300 mt-3">PolicyReporter<span class="text-surface-400 ml-2 italic">(2021 - 2022)</span></div>
    <ul class="list-disc ml-4 mt-2">
      <li>Designed and deployed new features in a microservices-driven ecosystem, creating new features for clients.</li>
      <li>Mentored 2 junior developers this year to educate them on best practices and share my knowledge of our platform.</li>
      <li>Identified 10+ performance bottlenecks and designed and built solutions to improve our platform speed by roughly 20%.</li>
    </ul>
    <div class="font-bold text-surface-300 mt-3">Canary Insights<span class="text-surface-400 ml-2 italic">(2020 - 2021)</span></div>
    <ul class="list-disc ml-4 mt-2">
      <li>Designed and deployed new features in a microservices-driven ecosystem, creating new features for clients.</li>
      <li>Mentored 2 junior developers this year to educate them on best practices and share my knowledge of our platform.</li>
      <li>Identified 10+ performance bottlenecks and designed and built solutions to improve our platform speed by roughly 20%.</li>
    </ul>
  </div>
  <!-- Education -->
  <div class="bg-surface-900 p-4 rounded-md mt-3">
    <div class="text-2xl font-bold mb-2">Education</div>
    <div class="font-bold text-surface-300">Georgia College & State University</div>
    <ul class="list-disc ml-4 mt-2">
      <li>Designed and deployed new features in a microservices-driven ecosystem, creating new features for clients.</li>
      <li>Mentored 2 junior developers this year to educate them on best practices and share my knowledge of our platform.</li>
      <li>Identified 10+ performance bottlenecks and designed and built solutions to improve our platform speed by roughly 20%.</li>
    </ul>
  </div>
</template>

<style scoped>

</style>

<script setup>
  import MainButton from './components/MainButton.vue';
  const greeting = 'Vue + Vite + Composition API';
  const idBlog = 'blogPosts';
  const blogClass = 'text-2xl font-bold text-blue-500';
</script>

<template>
  <MainButton />
  <h1>Vue + Vite</h1>

  <div :id="idBlog" :class="blogClass">
    {{ greeting }}
  </div>

  <OptionsComponent />
  <CompositionComponent />
</template>

<style scoped></style>

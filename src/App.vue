<script setup>
  import MainButton from './components/MainButton.vue';
  const greeting = 'Vue + Vite + Composition API';
  const idBlog = 'blogPosts';
  const blogClass = 'text-2xl font-bold text-blue-500';
  const submitButton = {
    title: 'Submit Button',
    disabled: true,
  };
</script>

<template>
  <MainButton disabled />
  <MainButton :title="`button`" />
  <MainButton :title="`test`" />
  <MainButton :title="`disabled`" :disabled="true" />
  <MainButton v-bind="submitButton" />
  <h1>Vue + Vite</h1>

  <div :id="idBlog" :class="blogClass">
    {{ greeting }}
  </div>

  <OptionsComponent />
  <CompositionComponent />
</template>

<style scoped></style>

<script setup>
  const name = 'Zora Lasya 2';

  const ShowName = () => {
    console.log(name);
  };
</script>

<template>
  <h1>{{ name }}</h1>
  <button @click="ShowName">Show Name</button>
  <p>This is a composition component.</p>
</template>

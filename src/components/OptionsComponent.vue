<script>
  export default {
    data() {
      return {
        name: 'Zora Lasya',
      };
    },
    methods: {
      ShowName() {
        console.log(this.name);
      },
    },
  };
</script>

<template>
  <h1>{{ name }}</h1>
  <button @click="ShowName">Show Name</button>
  <p>This is an options component.</p>
</template>

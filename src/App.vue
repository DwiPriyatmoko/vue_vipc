<script setup>
  import { reactive, ref, computed } from 'vue';

  const author = reactive({
    name: 'John Doe',
    books: ['Harry Potter', 'The Lord of the Rings', 'The Hobbit'],
  });

  const isPublished = computed(() => {
    console.log('test');
    return author.books.length > 0 ? 'Published Yes' : 'Published No';
  });

  const count = ref(0);

  const increment = () => {
    count.value++;
  };
</script>

<template>
  {{ isPublished }}
  <button @click="increment">{{ count }}</button>
</template>

<style scoped></style>

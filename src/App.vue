<script setup>
  import { reactive, ref, computed } from 'vue';

  const BookAuthor = ref(true);

  const author = reactive({
    name: 'James Gun',
    books: ['The Alchemist', 'The Alchemist 2', 'The Alchemist 3'],
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

  <h1>
    {{ author.name }}
    <span v-if="author.books.length === 1">Published a book</span>
    <span v-else-if="author.books.length > 1">Published many books</span>
    <span v-else>Published No books</span>
  </h1>
</template>

<style scoped></style>

<script setup>
  // const buttonDisabled = true;
  const isLoading = false;
  const buttonAttributes = {
    type: 'button',
    disabled: isLoading,
    class: 'text-white bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded',
  };
  const renderIsLoading = () => {
    return isLoading ? 'Loading' : 'Submit';
  };
  const url = {
    attr: 'href',
    link: '/home',
  };
</script>

<template>
  <a :[url.attr]="url.link">
    <button v-bind="buttonAttributes" :id="`id-${buttonAttributes.class}`">
      {{ renderIsLoading() }}
    </button>
  </a>
</template>

<style scoped></style>

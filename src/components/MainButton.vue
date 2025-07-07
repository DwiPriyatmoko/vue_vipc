<script setup>
  // const buttonDisabled = true;
  const isLoading = false;
  const buttonAttributes = {
    disabled: isLoading,
    class: 'text-white bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded',
  };
  const renderIsLoading = () => {
    return isLoading ? 'Loading' : 'Submit';
  };
</script>

<template>
  <!-- <button :disabled="buttonDisabled" class="btn">
    <slot>BUTTON</slot>
  </button> -->
  <button v-bind="buttonAttributes" :id="`id-${buttonAttributes.class}`">
    {{ renderIsLoading() }}
  </button>
</template>

<style scoped></style>

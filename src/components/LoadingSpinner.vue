<template>
  <div v-if="loading" class="d-flex justify-center my-8">
    <v-progress-circular indeterminate color="primary" size="64"></v-progress-circular>
  </div>
</template>

<script setup>
defineProps({ loading: Boolean });
</script>
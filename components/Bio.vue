<template>
    <div>
      <h2 class="text-2xl font-extrabold typewriter" v-typewriter>{{ $t('bio.title') }}</h2>
      <div class="text-base typewriter mb-6" v-typewriter v-html="$t('bio.bio_txt')" />
    </div>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  
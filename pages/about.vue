<template>
  <div class="mx-auto p-4">
    <h2 class="text-3xl font-extrabold mb-4">
      {{ $t('home.about') }}
    </h2>
    <ul>
      <li class="text-sm"><Bio /></li>
      <!-- <li class="text-sm"><VideoSection /></li> -->
    </ul>
  </div>
</template>

  <script setup>
  // Import components
  import Bio from '~/components/Bio.vue'
  import VideoSection from '~/components/VideoSection.vue'
  </script>

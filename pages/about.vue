<template>
  <div class="max-w-3xl mx-auto p-4">
    <h2 class="text-2xl font-bold mb-4">
      {{ $t('home.about') }}
    </h2>
    <ul>
      <li class="text-sm"><Bio /></li>
      <li class="text-sm"><VideoSection /></li>
      <li class="text-sm"><SocialLinks /></li>
    </ul>
  </div>
</template>
  
  <script setup>
  // Import components
  import Bio from '~/components/Bio.vue'
  import VideoSection from '~/components/VideoSection.vue'
  import SocialLinks from '~/components/SocialLinks.vue'
  </script>
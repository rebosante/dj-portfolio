<template>
  <div class="max-w-3xl mx-auto rounded-lg shadow-lg p-8 font-[sans-serif]">
    <div>
      <h2 class="text-2xl font-bold text-gray-800 mb-4">
        Modern Design Meets Powerful Performance
      </h2>
      <ul class="list-disc mt-4 space-y-2 text-gray-600 ml-4">
        <li class="text-sm"><Bio /></li>
        <li class="text-sm"><Video /></li>
        <li class="text-sm"><SocialLinks /></li>
      </ul>
    </div>
  </div>
</template>
  
  <script setup>
  // Import components
  import Bio from '~/components/Bio.vue'
  import Video from '~/components/Video.vue'
  import SocialLinks from '~/components/SocialLinks.vue'
  </script>
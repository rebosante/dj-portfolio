<template>
    <div class="container mx-auto p-4">
      <h1 class="text-4xl font-bold text-center">Home</h1>
      <!-- component -->
      <MusicList />
      <SocialLinks />
      <!-- 
        <LatestNews />
        <NextGigs />
      -->
    </div>
  </template>
  
  <script setup>
  // Import components
  // import LatestNews from '~/components/LatestNews.vue'
  import MusicList from '~/components/MusicList.vue'
  // import NextGigs from '~/components/NextGigs.vue'
  import SocialLinks from '~/components/SocialLinks.vue'
  </script>
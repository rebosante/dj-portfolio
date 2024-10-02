<template>
  <div class="relative md:h-screen flex flex-col justify-center lg:overflow-hidden bg-jayge-100">
    <div class="relative flex items-center h-jcam w-jcam bg-jayllow-500 pl-2 lg:pl-6 pr-2 md:pr-0 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 mx-auto rounded-xl lg:rounded-3xl">
      <div class="mx-auto w-full">
        <div class="flex items-center w-full flex-col md:flex-row">
          <!-- First Column (20% width) -->
          <img src="~assets/images/djjaycam-logo.svg" class="pr-4 image-logo" />
          <!-- Second Column (80% width) -->
          <div class="grow transition-height overflow-auto">
            <Navigation />
            <div class="text-jayge-200 bg-jayge-900">
              <NuxtPage class="change-height" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>    
</template>
  
  <script setup>
  import Navigation from '~/components/Navigation.vue'
  </script>

  <style scoped lang="css">
.transition-height {
  transition: height 0.5s ease-in-out;
  interpolate-size: allow-keywords;
}
.change-height {
  transition: height 0.5s;
  interpolate-size: allow-keywords;
}
@media (max-width: 1280px) {
.image-logo {
  width: 50%;
}
}
@media (min-width: 1281px) {
  .image-logo {
    width: 60%;
  }
 }
</style>
  
<template>
  <div class="relative h-screen flex flex-col justify-center overflow-hidden bg-jayge-100">
    <div class="relative flex items-center h-jcam bg-jayllow-500 pl-6 pr-0 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto w-jcam sm:rounded-3xl">
      <div class="mx-auto w-full">
        <div class="flex items-center w-full flex-col lg:flex-row">
          <!-- First Column (20% width) -->
          <img src="~assets/images/djjaycam-logo.svg" width="60%" class="pr-4" />
          <!-- Second Column (80% width) -->
          <div class="grow transition-height">
            <Navigation />
            <div class="text-jayge-200 bg-jayge-900">
              <NuxtPage />
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
}

</style>
  
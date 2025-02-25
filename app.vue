<script setup>
import Preloader from '~/components/Preloader.vue'

const nuxtApp = useNuxtApp()
const isFirstLoad = ref(true)
const isLoadingPage = ref(false)

nuxtApp.hook('page:finish', () => {
  isLoadingPage.value = false
})

nuxtApp.hook('app:error', () => {
  isLoadingPage.value = false
})

nuxtApp.hook('vue:error', () => {
  isLoadingPage.value = false
})

nuxtApp.hook('page:finish', () => {
  isLoadingPage.value = false
})

nuxtApp.hook('app:error', () => {
  isLoadingPage.value = false
})

nuxtApp.hook('vue:error', () => {
  isLoadingPage.value = false
})
</script>
<template>
  <div>
    <Preloader v-if="isLoadingPage && !isFirstLoad" />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

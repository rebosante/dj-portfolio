<template>
    <div class="container mx-auto p-4">
      <!-- <Preloader v-if="isLoading" /> -->
      <h1 class="text-4xl font-bold text-center mb-4 typewriter" v-typewriter>{{ $t('home.welcome') }}</h1>
      <RandomText :texts="texts" />
      <!-- <p class="text-base typewriter mb-6" v-typewriter v-html="$t('welcome.txt_1')" /> -->
      <!-- component -->
      <!--
        <LatestNews />
        <NextGigs />
      -->
    </div>
  </template>

  <script setup>
  // Import components
  // import LatestNews from '~/components/LatestNews.vue'
  // import NextGigs from '~/components/NextGigs.vue'
  import RandomText from '~/components/RandomText.vue'
  import { useI18n } from 'vue-i18n' // Import useI18n
  // import Preloader from '~/components/Preloader.vue'
  // const isLoading = ref(false)
  // onBeforeMount(() => {
  // isLoading.value = true
  // })
  // onMounted(() => {
  //   isLoading.value = false
  // })
  const { t } = useI18n()
  const texts = [
    t('welcome.txt_1'),
    t('welcome.txt_2'),
    t('welcome.txt_3'),
    t('welcome.txt_4'),
    t('welcome.txt_5'),
    t('welcome.txt_6')
  ]
  </script>

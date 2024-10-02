<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';

const router = useRouter();
const route = useRoute();
const { locales, locale, setLocale } = useI18n();

const changeLanguage = async (langCode: string) => {
  await setLocale(langCode); // Update locale
  // Keep the current route, but replace the locale part of the path
  router.push({
    path: route.fullPath,
    query: { ...route.query },
    hash: route.hash
  });
};
</script>

<template>
  <button 
    v-for="item in locales" 
    :key="typeof item === 'object' ? item.code : item"
    @click="changeLanguage(typeof item === 'object' ? item.code : item)"
    :class="{'active': locale === (typeof item === 'object' ? item.code : item)}"
    class="px-4 py-2 hover:bg-jayllow-400 text-xs" 
  >
    {{ typeof item === "object" ? item.name.slice(0, 3) : item.slice(0, 3) }}
  </button>
</template>

<style scoped>
  .active {
    background: var(--jay-yellow-hover);
    color: var(--jay-yellow-light);
  }
</style>
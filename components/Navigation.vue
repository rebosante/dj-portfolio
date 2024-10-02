<template>
  <nav>
    <div class="desktop-menu jay-font w-full text-sm lg:text-base">
      <ul class="flex items-center">
        <li><NuxtLink :to="'/'" :class="{ active: $route.path === '/' }">Home</NuxtLink></li>
        <li><NuxtLink :to="'/about'" :class="{ active: $route.path === '/about' }">About</NuxtLink></li>
        <li><NuxtLink :to="'/contact'" :class="{ active: $route.path === '/contact' }">Contact</NuxtLink></li>
        <li class="grow text-right"><LanguageSwitcher /></li>
      </ul>
    </div>
    <div class="mobile-menu jay-font">
      <button @click="toggleMenu">☰</button>
      <div v-if="menuOpen">
        <ul>
          <li class="nav-link"><NuxtLink :to="'/'" :class="{ active: $route.path === '/' }">Home</NuxtLink></li>
          <li class="nav-link"><NuxtLink :to="'/about'" :class="{ active: $route.path === '/about' }">About</NuxtLink></li>
          <li class="nav-link"><NuxtLink :to="'/contact'" :class="{ active: $route.path === '/contact' }">Contact</NuxtLink></li>
          <li><LanguageSwitcher /></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import LanguageSwitcher from '~/components/LanguageSwitcher.vue'

const menuOpen = ref(false)

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}

const $route = useRoute(); // Get the current route to handle active links
</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
}

.desktop-menu ul {
  display: flex;
  gap: 1em;
}

.mobile-menu {
  display: none;
}

/* Hover and active states for NuxtLink */
a {
  color: var(--jay-yellow-darkest);
  text-decoration: none;
  transition: all 0.3s ease;
}

a:hover {
  color: var(--jay-yellow-lighter); /* Change to your preferred hover color */
}

a.active {
  color: var(--jay-yellow-lighter); /* Active color */
  font-weight: bold;
}

@media (max-width: 768px) {
  .desktop-menu {
    display: none;
  }
  .mobile-menu {
    display: block;
  }
}
</style>

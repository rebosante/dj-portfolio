<template>
    <nav>
      <div class="desktop-menu jay-font">
        <ul>
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/contact">Contact</NuxtLink></li>
        </ul>
      </div>
      <div class="mobile-menu">
        <button @click="toggleMenu">☰</button>
        <div v-if="menuOpen">
          <ul>
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><NuxtLink to="/about">About</NuxtLink></li>
            <li><NuxtLink to="/contact">Contact</NuxtLink></li>
          </ul>
        </div>
      </div>
    </nav>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const menuOpen = ref(false)
  
  function toggleMenu() {
    menuOpen.value = !menuOpen.value
  }
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
  
  @media (max-width: 768px) {
    .desktop-menu {
      display: none;
    }
    .mobile-menu {
      display: block;
    }
  }
  </style>
  
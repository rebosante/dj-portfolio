<template>
  <nav>
    <div class="desktop-menu jay-font w-full text-sm lg:text-base">
      <ul class="flex items-center">
        <li><NuxtLink :to="'/'" :class="{ active: $route.path === '/' }" data-letters="Home" class="glitch-text">Home</NuxtLink></li>
        <li><NuxtLink :to="'/about'" :class="{ active: $route.path === '/about' }" data-letters="About" class="glitch-text">About</NuxtLink></li>
        <li><NuxtLink :to="'/contact'" :class="{ active: $route.path === '/contact' }" data-letters="Contact" class="glitch-text">Contact</NuxtLink></li>
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
/*
a {
  color: var(--jay-yellow-darkest);
  text-decoration: none;
  transition: all 0.3s ease;
}

a:hover {
  color: var(--jay-yellow-lighter);
}

a.active {
  color: var(--jay-yellow-lighter);
  font-weight: bold;
}
*/
@media (max-width: 768px) {
  .desktop-menu {
    display: none;
  }
  .mobile-menu {
    display: block;
  }
}

/* glitch */
.glitch-text {
  color: var(--jay-scroll-2);
  position: relative;
  font-size: 16px;
}
.glitch-text:hover::before, .glitch-text:hover::after {
  color: var(--jay-yellow-lightest);
  content: attr(data-letters);
  position: absolute;
  width: 100%;
  height: 100%;
  background: #e7b700;
  overflow: hidden;
  top: 0;
}
.glitch-text:hover::before {
  left: -2px;
  text-shadow: -2px 0 red;
  animation-name: glitch-animation-1;
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: reverse-alternate;
}
.glitch-text:hover::after {
  left: -2px;
  text-shadow: -2px 0 blue;
  animation-name: glitch-animation-2;
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: reverse-alternate;
}

@keyframes glitch-animation-1 {
  0% {
    clip: rect(2px, 150px, 1px, -10px);
  }
  5% {
    clip: rect(4px, 150px, 11px, -10px);
  }
  10% {
    clip: rect(1px, 150px, 33px, -10px);
  }
  15% {
    clip: rect(1px, 150px, 37px, -10px);
  }
  20% {
    clip: rect(1px, 150px, 39px, -10px);
  }
  25% {
    clip: rect(2px, 150px, 7px, -10px);
  }
  30% {
    clip: rect(3px, 150px, 34px, -10px);
  }
  35% {
    clip: rect(4px, 150px, 33px, -10px);
  }
  40% {
    clip: rect(5px, 150px, 15px, -10px);
  }
  45% {
    clip: rect(1px, 150px, 1px, -10px);
  }
  50% {
    clip: rect(4px, 150px, 35px, -10px);
  }
  55% {
    clip: rect(1px, 150px, 6px, -10px);
  }
  60% {
    clip: rect(1px, 150px, 3px, -10px);
  }
  65% {
    clip: rect(1px, 150px, 12px, -10px);
  }
  70% {
    clip: rect(1px, 150px, 26px, -10px);
  }
  75% {
    clip: rect(3px, 150px, 38px, -10px);
  }
  80% {
    clip: rect(4px, 150px, 40px, -10px);
  }
  85% {
    clip: rect(4px, 150px, 13px, -10px);
  }
  90% {
    clip: rect(4px, 150px, 13px, -10px);
  }
  95% {
    clip: rect(3px, 150px, 30px, -10px);
  }
  100% {
    clip: rect(1px, 150px, 8px, -10px);
  }
}
@keyframes glitch-animation-2 {
  0% {
    clip: rect(1px, 150px, 37px, -10px);
  }
  5% {
    clip: rect(1px, 150px, 20px, -10px);
  }
  10% {
    clip: rect(2px, 150px, 39px, -10px);
  }
  15% {
    clip: rect(1px, 150px, 38px, -10px);
  }
  20% {
    clip: rect(1px, 150px, 10px, -10px);
  }
  25% {
    clip: rect(3px, 150px, 3px, -10px);
  }
  30% {
    clip: rect(2px, 150px, 35px, -10px);
  }
  35% {
    clip: rect(2px, 150px, 38px, -10px);
  }
  40% {
    clip: rect(4px, 150px, 26px, -10px);
  }
  45% {
    clip: rect(1px, 150px, 36px, -10px);
  }
  50% {
    clip: rect(3px, 150px, 2px, -10px);
  }
  55% {
    clip: rect(1px, 150px, 27px, -10px);
  }
  60% {
    clip: rect(1px, 150px, 26px, -10px);
  }
  65% {
    clip: rect(4px, 150px, 30px, -10px);
  }
  70% {
    clip: rect(1px, 150px, 40px, -10px);
  }
  75% {
    clip: rect(2px, 150px, 18px, -10px);
  }
  80% {
    clip: rect(1px, 150px, 10px, -10px);
  }
  85% {
    clip: rect(4px, 150px, 9px, -10px);
  }
  90% {
    clip: rect(4px, 150px, 21px, -10px);
  }
  95% {
    clip: rect(3px, 150px, 8px, -10px);
  }
  100% {
    clip: rect(1px, 150px, 22px, -10px);
  }
}
</style>

<script setup>
import Instagram from '@/components/icons/Instagram.vue'
import Facebook from '@/components/icons/Facebook.vue'
import Youtube from '@/components/icons/Youtube.vue'
import Tiktok from "@/components/icons/Tiktok.vue"
import Twitch from "@/components/icons/Twitch.vue"
import Mixcloud from "@/components/icons/Mixcloud.vue"

const socialLinks = [
  {
    name: 'instagram',
    url: 'https://www.instagram.com/jaycamdj/',
    icon: Instagram,
    bgColor: 'bg-[#c13584]',
    iconClass: '[&>svg]:h-4 [&>svg]:w-4'
  },
  {
    name: 'facebook',
    url: 'https://www.facebook.com/mIxApOLiS/',
    icon: Facebook,
    bgColor: 'bg-[#1877f2]',
    iconClass: '[&>svg]:h-4 [&>svg]:w-4'
  },
  /* {
    name: 'youtube',
    url: 'https://www.youtube.com/mixapolis/',
    icon: Youtube,
    bgColor: 'bg-[#ff0000]',
    iconClass: '[&>svg]:h-4 [&>svg]:w-4'
  },
  {
    name: 'tiktok',
    url: 'https://www.tiktok.com/mixapolis/',
    icon: Tiktok,
    bgColor: 'bg-[#6a76ac]',
    iconClass: '[&>svg]:h-4 [&>svg]:w-4'
  }, */
  {
    name: 'twitch',
    url: 'https://www.twitch.com/mixapolis/',
    icon: Twitch,
    bgColor: 'bg-[#9146ff]',
    iconClass: '[&>svg]:h-4 [&>svg]:w-4'
  },
  {
    name: 'mixcloud',
    url: 'https://www.mixcloud.com/mixapolis/',
    icon: Mixcloud,
    bgColor: 'bg-[#4E1DF8]',
    iconClass: '[&>svg]:h-4 [&>svg]:w-6'
  }
]
</script>

<template>
  <div class="mt-4 p-4">
    <h2 class="text-2xl font-extrabold">{{ $t('social.title') }}</h2>

    <ul class="flex flex-wrap mt-4">
      <li
          v-for="(link, index) in socialLinks"
          :key="index"
          class="flex items-center justify-center shrink-0"
      >
        <a
            :href="link.url"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="link.name"
            class="mb-2 inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
            :class="link.bgColor"
        >
          <span :class="link.iconClass">
            <component :is="link.icon" />
          </span>
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
ul {
  list-style: none;
  padding: 0;
}
li {
  display: inline;
  margin-right: 1em;
}
</style>

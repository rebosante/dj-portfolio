// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: {
      name:'fade',
      mode: 'out-in'
    }
  },
  devtools: { enabled: true },
  css: [
    '@/assets/css/main.css'
  ],
  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
    },
  },
  modules: ['@nuxtjs/i18n'],
  i18n: {
    compilation: {
      strictMessage: false,
    },
    // lazy: true,
    langDir: 'locales',
    strategy: 'no_prefix',
    locales: [
      { code: 'en-US', iso: 'en-US', name: 'English', file: 'en-US.json' },
      { code: 'es-ES', iso: 'es-ES', name: 'Español', file: 'es-ES.json' }
    ],
    defaultLocale: 'en-US',
    vueI18n: './i18n.options.ts',
  },
  runtimeConfig: {
    MAILHOST: process.env.MAILHOST,
    MAILPORT: process.env.MAILPORT,
    MAILUSER: process.env.MAILUSER,
    MAILPASSWORD: process.env.MAILPASSWORD,
    CONTACTMAIL: process.env.CONTACTMAIL,
    SITEURL: process.env.NUXT_PUBLIC_SITE_URL || 'https://jaycamdj.com'
  },
  compatibilityDate: '2025-02-01'
})

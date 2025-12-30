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
  modules: ['@nuxtjs/i18n', '@nuxtjs/turnstile'],
  turnstile: {
    siteKey: process.env.NUXT_PUBLIC_TURNSTILE_SITE_KEY || process.env.TURNSTILE_SITE_KEY || '',
  },
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
    SITEURL: process.env.NUXT_PUBLIC_SITE_URL || 'https://jaycamdj.com',
    turnstile: {
      // Prefer standard env names used by the module
      secretKey: process.env.NUXT_TURNSTILE_SECRET_KEY || process.env.TURNSTILE_SECRET || process.env.TURNSTILE_SECRET_KEY || '',
    },
    public: {
      turnstileSiteKey: process.env.NUXT_PUBLIC_TURNSTILE_SITE_KEY || process.env.TURNSTILE_SITE_KEY || '',
    }
  },
  compatibilityDate: '2025-02-01'
})

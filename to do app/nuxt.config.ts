// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: [
    '~/assets/styles/main.css' // Global styles
  ],
  modules: [
    '@unocss/nuxt',
    '@formkit/auto-animate/nuxt'
  ],
  app: {
    head: {
      title: 'Limbo To Do',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
      ],
      script: [
        {
          src: 'https://kit.fontawesome.com/684b5ecd70.js',
          crossorigin: 'anonymous'
        }
      ]
    }
  }
});

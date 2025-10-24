// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  app: {
    head: {
      title: 'danako',
      meta: [
        { name: 'description', content: 'خانه بازی داناکو، محیطی شاد برای کودکان' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { charset: 'utf-8' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

   css: [
    'bootstrap/dist/css/bootstrap.min.css',
    'bootstrap-icons/font/bootstrap-icons.css',
    '@/assets/css/fonts.css',
    '~/assets/css/main.css'
  ],
  plugins: [{ src: '~/plugins/bootstrap.client.ts', mode: 'client' },
  ],

  modules: [
    '@pinia/nuxt'
  ]
})
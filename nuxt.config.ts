// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/image'],
  css: ['~/assets/css/vendor.min.css', '~/assets/css/main.scss'],
  app: {
    head: {
      title: 'Emoji Kitchen',
      meta: [
        {
          name: 'description',
          content:
            'Use Emoji Kitchen to design personalized emoji combinations. Express your creativity and share unique emoji creations with others.',
        },
        { name: 'keywords', content: 'Emoji Kitchen,Emoji Combos,Emoji Creator,Mix Emojis,Emoji Maker,Fun Emojis' },
        { name: 'apple-mobile-web-app-title', content: 'Emoji Kitchen' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        { name: 'mobile-web-app-capable', content: 'yes' },
        { name: 'color-scheme', content: 'only light' },
        { name: 'robots', content: 'max-image-preview:large' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0, minimal-ui, shrink-to-fit=no viewport-fit=cover' },
        { name: 'application-name', content: 'Emoji Kitchen' },
        { name: 'msapplication-TileColor', content: '#2d89ef' },
      ],
      link: [{ rel: 'shortcut icon', href: `/favicon.ico` }],
      htmlAttrs: {
        lang: 'en', // 默认语言
      },
    },
  },
  image: {
    formats: ['webp'],
  },
})

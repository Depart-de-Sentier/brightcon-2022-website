export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Brightcon 2022',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Brightcon is an annual conference where the community of the open source framework for LCA Brightway meets. It enables interactions between Brightway developers, maintainers, contributors, users and adopters.',
      },
      { name: 'format-detection', content: 'telephone=no' },
      {
        hid: 'og:image',
        property: 'og:image',
        content: '/images/banner-linkedin.png',
      },
      {
        hid: 'twitter:card',
        property: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        hid: 'twitter:image',
        property: 'twitter:image',
        content: '/images/2022-brightcon-banner-twitter.png',
      },
      {
        hid: 'twitter:title',
        property: 'twitter:title',
        content: 'Brightcon 2022',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/chota.min.css' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // 'chota'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/sitemap'],
  sitemap: {
    hostname: 'https://2022.brightcon.link',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vee-validate'],
    postcss: {
      plugins: {
        'postcss-custom-properties': false,
      },
    },
  },
}

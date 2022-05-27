import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config

export default defineNuxtConfig({
  meta: {
    title: "Brightcon 2022",
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Brightcon is an annual conference where the community of the open source framework for LCA Brightway meet. The conference enables interactions between Brightway developers, maintainers, contributors, users and adopters.'
      }
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico",
      },
    ],
  },
  modules:[
    '@nuxtjs/sitemap'
  ],
  sitemap: {
    hostname: 'https://2022.brightcon.link',
    gzip: true,
    routes: [
      '/',
      '/calls',
      '/legal',
      '/programme',
      '/register',
      '/sponsors',
      '/venue',
      '/WhatsNewIn2022',
    ]
  },

});

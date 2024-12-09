import process from 'node:process'
import { defaultResource } from './@types/default-resource'
import { pwa } from './config/pwa'
import { appDescription } from './constants/index'

if (!process.env.NUXT_PUBLIC_APP_URL) {
  throw new Error('NUXT_PUBLIC_APP_URL 未设置')
}

export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@vite-pwa/nuxt',
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@vue-macros/nuxt',
    'nuxt-svgo',
    '@nuxt/image',
    '@nuxtjs/i18n',
    '@nuxtjs/google-fonts',
    'nuxt-swiper',
    'motion-v/nuxt',
    'floating-vue/nuxt',
  ],
  devtools: {
    enabled: true,
  },
  app: {
    keepalive: true,
    pageTransition: {
      name: 'fade',
      mode: 'in-out',
    },
    head: {
      viewport: 'width=device-width,initial-scale=1',
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: appDescription },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        { name: 'theme-color', media: '(prefers-color-scheme: light)', content: 'white' },
        { name: 'theme-color', media: '(prefers-color-scheme: dark)', content: '#222222' },
      ],
    },
  },

  css: [
    './assets/css/main.css',
  ],
  colorMode: {
    fallback: 'dark',
    dataValue: 'theme',
  },
  runtimeConfig: {
    public: {
      appUrl: process.env.NUXT_PUBLIC_APP_URL,
    },
  },
  build: {
    analyze: true,
  },
  devServer: {
    port: 9832,
  },

  future: {
    compatibilityVersion: 4,
  },

  experimental: {
    // when using generate, payload js assets included in sw precache manifest
    // but missing on offline, disabling extraction it until fixed
    payloadExtraction: false,
    renderJsonPayloads: true,
    typedPages: true,
  },

  compatibilityDate: '2024-08-14',

  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
    prerender: {
      crawlLinks: false,
      routes: ['/'],
      // ignore: ['/hi'],
    },
  },
  debug: process.env.NODE_ENV === 'development',
  eslint: {
    config: {
      standalone: false,
      nuxt: {
        sortConfigKeys: true,
      },
    },
  },

  googleFonts: {
    families: {
      Inter: [400, 600, 800],
    },
  },

  i18n: {
    locales: defaultResource,
    lazy: true,
    defaultLocale: 'en',
    detectBrowserLanguage: {
      useCookie: true,
      cookieCrossOrigin: true,
    },
  },

  image: {
    // domains: ['web-res-aaa.afunimg5.com'],
  },

  macros: {
    setupSFC: true,
    betterDefine: false,
    defineProp: {
      edition: 'johnsonEdition',
    },
  },

  pwa,

  shadcn: {
    prefix: '',
  },
  svgo: {
    componentPrefix: 'i',
    defaultImport: 'component',
    svgoConfig: {
      multipass: true,
      plugins: [{
        name: 'removeUselessStrokeAndFill',
        params: {
          stroke: false,
          fill: false,
          removeNone: false,
        },
      }],
    },
  },
})

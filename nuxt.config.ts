import { defaultResource } from './@types/default-resource'
import { pwa } from './config/pwa'
import { appDescription } from './constants/index'

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
    '@nuxtjs/device',
    'nuxt-svgo',
    '@nuxt/image',
    '@nuxtjs/i18n',
    '@nuxtjs/google-fonts',
    'nuxt-swiper',
  ],

  devtools: {
    enabled: true,
  },

  app: {
    head: {
      viewport: 'width=device-width,initial-scale=1',
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'icon', type: 'image/svg+xml', href: '/nuxt.svg' },
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
    dataValue: 'dark',
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
  },

  macros: {
    setupSFC: true,
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
        name: 'preset-default',
        params: {
          overrides: {
            removeViewBox: false,
          },
        },
      }],
    },
  },
})

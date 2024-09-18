import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    'nuxtjs-naive-ui',
    '@nuxtjs/tailwindcss',
    '@nuxt/devtools',
  ],
  devtools: {enabled: true},
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
  },
  vite: {
    plugins: [
      AutoImport({
        imports: [
          {
            'naive-ui': [
              'useDialog',
              'useMessage',
              'useNotification',
              'useLoadingBar'
            ]
          }
        ]
      }),
      Components({
        resolvers: [NaiveUiResolver()]
      })
    ]
  },
  
  experimental:{
    asyncContext: true,
  },
  
  runtimeConfig: {
    djangoServerUrl: "http://127.0.0.1:8000",
    public: {
      djangoServerUrl: "",
    }
  },
  routeRules:{
    '/api/auth/**': {
      proxy: {
        to: "http://127.0.0.1:8000/api/auth/**",
      }
    }
  },

  compatibilityDate: '2024-09-11'
})
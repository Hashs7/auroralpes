require('dotenv').config();
const contentful = require('contentful');
const { getNestedReferences } = require('./utils/contentful');

export default {
  mode: 'universal',
  // mode: 'spa',
  server: {
    port: 8000, // default: 3000
    host: '0.0.0.0', // default: localhost,
    timing: false
  },

  loading: '~/components/Intro.vue',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || 'Auroralpes',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'initial-scale=1.0,maximum-scale=1,width=device-width' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      { hid: 'og:image', property: 'og:image', content: 'https://www.auroralpes.fr/img/banner-image.jpg' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  env: {
    CTF_SPACE_ID: process.env.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: process.env.CTF_CDA_ACCESS_TOKEN,
    PERSONAL_ACCESS_TOKEN: process.env.PERSONAL_ACCESS_TOKEN
  },

  buildModules: [
    '@nuxtjs/google-analytics'
  ],

  googleAnalytics: {
    id: 'UA-159949019-1',
    disabled: true,
    debug: {
      enabled: true,
      sendHitTask: true
    }
  },

  /*
   ** Customize the progress-bar color
   */
  // loading: { color: '#FF9357' },

  pageTransition: {
    /*mode: 'out-in',
     css: false,
     beforeEnter (el) {
     console.log('before');
     TweenMax.set(el, {
     transformPerspective: 600,
     perspective: 300,
     transformStyle: 'preserve-3d'
     })
     },
     enter (el, done) {
     TweenMax.to(el, 1, {
     rotationY: 360,
     transformOrigin: '50% 50%',
     ease: Back.easeOut
     })
     done()
     },
     leave (el, done) {
     TweenMax.to(el, 1, {
     rotationY: 0,
     transformOrigin: '50% 50%',
     ease: Back.easeIn
     });
     done()
     }*/
  },

  /*
   ** Global CSS
   */
  css: [
    '@/assets/style/index.scss',
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/contentful',
    '~/plugins/vue-lazyload',
    {
      src: '~/plugins/color',
      ssr: false,
    },
    {
      src: '~/plugins/locomotive-scroll',
      ssr: false,
    },
    {
      src: '~/plugins/scrollmagic',
      ssr: false,
    },
    {
      src: '~/plugins/vue-hammer',
      ssr: false,
    },
    {
      src: '~/plugins/directives',
      ssr: false,
    },
    {
      src: '~/plugins/parallax',
      ssr: false,
    },
    {
      src: '~/plugins/split',
      ssr: false,
    },
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    '@nuxtjs/dotenv',
    '@nuxtjs/sitemap',
    ['@nuxtjs/google-analytics', {
      id: process.env.GOOGLE_ANALYTICS_ID,
      disabled: true,
      debug: {
        sendHitTask: process.env.NODE_ENV === 'production',
      },
    }],
    'vue-scrollto/nuxt'
  ],
  styleResources: {
    scss: [
      '~/assets/style/0-settings/_settings-colors.scss',
      '~/assets/style/0-settings/_settings-mixins.scss',
      '~/assets/style/0-settings/_settings-media.scss',
      '~/assets/style/0-settings/_settings-typography.scss',
    ]
  },
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
   ** Build configuration
   */
  build: {
    analyze: {
      analyzerMode: 'static'
    },
    /*
     ** You can extend webpack config here
     */
    extend: (config) => {
      const svgRule = config.module.rules.find(rule => rule.test.test('.svg'));

      svgRule.test = /\.(png|jpe?g|gif|webp)$/;

      config.module.rules.push({
        test: /\.svg$/,
        loader: 'vue-svg-loader',
        options: {
          svgo: {
            plugins: [
              { removeDoctype: true },
              { removeComments: true },
              { cleanupIDs: false },
              { collapseGroups: false },
              { removeEmptyContainers: false }
            ]
          }
        }
      });
    },
  },

  generate: {
    fallback: true,
    routes: async () => {
      // Generate Contentful client
      const client = contentful.createClient({
        space: process.env.CTF_SPACE_ID,
        accessToken: process.env.CTF_CDA_ACCESS_TOKEN,
      });

      // Get setting
      const { items: [settings] } = await client.getEntries({
        content_type: 'settings',
      });

      const pages = (await getNestedReferences(settings)).fields.pages;

      // Get pages (you might need to duplicate this for every content type you have
      /* const { items: simplePages } = await client.getEntries({
        content_type: 'page',
      });
      pages.push(...simplePages); */

      // Generate page
      return pages.filter((page) => page.sys.contentType.sys.id !== 'homepage').map((page) => ({
        route: page.fields.slug,
        payload: page,
      }));
    },
  },

  /**
   * PWA config
   */
  pwa: {
    meta: {
      mobileAppIOS: true,
      name: process.env.npm_package_name || '',
      lang: 'fr',
      theme_color: '#ffffff',
      nativeUI: true,
    },
    manifest: {
      name: process.env.npm_package_name || '',
      lang: 'fr',
      background_color: '#ffffff',
      display: 'standalone',
      orientation: 'portrait-primary',
      theme_color: '#ffffff',
    },
    workbox: {
      skipWaiting: true,
      runtimeCaching: [
        // Cache the Google Fonts stylesheets with a stale while revalidate strategy.
        {
          urlPattern: /^https:\/\/fonts\.googleapis\.com/,
          handler: 'staleWhileRevalidate',
          options: {
            cacheName: 'google-fonts-stylesheets',
            cacheableResponse: {
              statuses: [0, 200],
            },
          },
        },

        // Cache the Google Fonts webfont files with a cache first strategy for 1 year.
        {
          urlPattern: /^https:\/\/fonts\.gstatic\.com/,
          handler: 'cacheFirst',
          options: {
            cacheName: 'google-fonts-webfonts',
            cacheableResponse: {
              statuses: [0, 200],
            },
            expiration: {
              maxAgeSeconds: 31536000, // 1 year
            },
          },
        },


        // Cache the Typekit stylesheets with a stale while revalidate strategy.
        {
          urlPattern: /^https:\/\/use\.typekit\.net\/(?!af\/)/,
          handler: 'staleWhileRevalidate',
          options: {
            cacheName: 'typekit-fonts-stylesheets',
            cacheableResponse: {
              statuses: [0, 200],
            },
          },
        },

        // Cache the Typekit webfont files with a cache first strategy for 1 year.
        {
          urlPattern: /^https:\/\/use\.typekit\.net\/af\//,
          handler: 'cacheFirst',
          options: {
            cacheName: 'typekit-fonts-webfonts',
            cacheableResponse: {
              statuses: [0, 200],
            },
            expiration: {
              maxAgeSeconds: 31536000, // 1 year
            },
          },
        },
      ],
    },
  },

  /**
   * Add 404 page
   */
  router: {
    linkExactActiveClass: 'exact-active-link',
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'internetexplorer',
        path: '/ie',
        component: resolve(__dirname, 'pages/ie.vue'),
      }, {
        name: 'errors',
        path: '*',
        component: resolve(__dirname, 'pages/404.vue'),
      });
    },
  },
}

import pkg from './package'

require('dotenv').config();

export default {
    mode: 'universal',
  server: {
    port: 8000, // default: 3000
    host: '0.0.0.0', // default: localhost,
    timing: false
  },
    // mode: 'spa',

    /*
    ** Headers of the page
    */
    head: {
        title: pkg.name,
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: pkg.description},
            {hid: 'og:image', property: 'og:image', content: 'https://www.auroralpes.fr/img/banner-image.jpg' }
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
        ]
    },

    env: {
        CTF_SPACE_ID: process.env.CTF_SPACE_ID,
        CTF_CDA_ACCESS_TOKEN: process.env.CTF_CDA_ACCESS_TOKEN,
        PERSONAL_ACCESS_TOKEN: process.env.PERSONAL_ACCESS_TOKEN
    },

    /*
    ** Customize the progress-bar color
    */
    loading: {color: '#FF9357'},



    /*
    ** Global CSS
    */
    css: [
        '@/assets/style/index.scss',
    ],

    router: {
        linkExactActiveClass: 'exact-active-link'
    },
    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        '~/plugins/contentful',
        '~/plugins/directives',
        '~/plugins/parallax'
    ],

    /*
    ** Nuxt.js modules
    */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        '@nuxtjs/pwa',
        '@nuxtjs/style-resources',
        '@nuxtjs/dotenv',
        '@nuxtjs/sitemap',
        ['@nuxtjs/google-analytics', {
            id: 'UA-12301-2'
        }],
        'vue-scrollto/nuxt'
    ],
    styleResources: {
        scss: [
            '~/assets/style/0-settings/_settings-colors.scss',
            '~/assets/style/0-settings/_settings-media.scss',
            '~/assets/style/0-settings/_settings-typography.scss',
            '~/assets/style/8-utilities/_utilities-fluid-font.scss'
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
                            {removeDoctype: true},
                            {removeComments: true},
                            {cleanupIDs: false},
                            {collapseGroups: false},
                            {removeEmptyContainers: false}
                        ]
                    }
                }
            });
        },
    }
}

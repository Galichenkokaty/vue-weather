// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: false },
    devServer: {
        port: 8120,
        host: '0.0.0.0',
    },
    css: ['~/assets/css/style.css'],
    modules: [
        '@nuxt/image',
    ],
    image: {
        dir: 'assets/image'
    },
})

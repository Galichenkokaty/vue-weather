// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: false },
    devServer: {
        port: 8121,
        host: '0.0.0.0',
    },
    css: ['~/assets/css/style.css'],
    modules: [
        '@nuxt/image',
        'nuxt-icons'
    ],
    image: {
        dir: 'assets/image'
    },
})

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {
			title: 'Chiclelandia - Rust',
			htmlAttrs: {
				lang: 'es'
			},
			meta: [
				{
					name: 'viewport',
					content: 'width=device-width, initial-scale=1'
				},
				{
					name: 'description',
					content: 'Chiclelandia. Comunidad de videjuegos en español. SCP: Secret Laboratory, Rust y más.'
				},
				{
					name: 'theme-color',
					content: '#ffffff'
				}
			],
			link: [
				{
					rel: 'icon',
					type: 'image/x-icon',
					href: '/favicon.png'
				}
			],
		}
	},
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: [
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxtjs/tailwindcss'
  ]
})
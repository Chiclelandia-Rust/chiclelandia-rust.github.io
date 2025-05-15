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
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxtjs/i18n',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxtjs/tailwindcss'
  ],

	i18n: {
		strategy: 'no_prefix',
		defaultLocale: 'es-ES',
		locales: [
			{ code: 'es-ES', language: 'es-ES', name: 'Español', file: 'es.json'},
			{ code: 'en-GB', language: 'en-GB', name: 'English', file: 'en.json'}
		]
	},

	routeRules: {
    '/': { prerender: true },
  },

  css: [
    '@/assets/css/main.css'
  ]
})
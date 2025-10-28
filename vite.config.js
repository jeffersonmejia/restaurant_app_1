import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
	base: '/restaurant_app_1/',
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'index.html'),
				main: resolve(__dirname, 'home.html'),
				signup: resolve(__dirname, 'signup.html'),
				signin: resolve(__dirname, 'signin.html'),
			},
		},
	},
})

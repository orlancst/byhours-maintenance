/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'fondo-byhours': "url('/src/assets/img/fondo_city.webp')",
			},
			fontFamily: {
				'roboto-bold': '"Roboto Bold", sans-serif',
				'titilliumweb-semiBold': '"TitilliumWeb SemiBold", sans-serif',
				
			},
			listStyleType: {
				"marker-icon": 'url("/src/assets/img/marker.png")',
			},
		},
	},
	plugins: [],
}

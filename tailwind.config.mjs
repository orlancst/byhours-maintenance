/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'fondo-byhours': "url('/src/assets/img/fondo_city.webp')",
				'fondo-carnaval': "url('/src/assets/img/fondo_carnaval.webp')",
			},
			fontFamily: {
				'roboto-bold': '"Roboto Bold", sans-serif',
				'titilliumweb-semiBold': '"TitilliumWeb SemiBold", sans-serif',
				'montserrat-bold': '"Montserrat Bold", Arial, sans-serif',
				
			},
			listStyleType: {
				"marker-icon": 'url("/src/assets/img/marker.png")',
			},
			animation: {
                'textToRight': 'textToRight .65s cubic-bezier(.215,.61,.355,1) 30ms forwards',
            },
			keyframes: {
				textToRight: {
					'0%': {
						opacity: '0',
                        transform: 'translate3d(-10px,0,0)',
                    },
                    '100%': {
						opacity: '1',
                        transform: 'translate3d(0,0,0)',
                    },
				}
			}
		},
	},
	plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			keyframes: {
				slideX: {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(-100%)' }
				},
				slideY: {
					'0%': { transform: 'translateY(0)' },
					'100%': { transform: 'translateY(-50%)' }
				}
			},
			animation: {
				slideX: 'slideX 30s linear infinite',
				slideY: 'slideY 100s linear infinite'
			}
		}
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: ['light', 'night', 'cyberpunk'],
		darkTheme: 'night'
	}
};

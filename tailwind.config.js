/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
			extend: {
				backgroundImage: {
					'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
					'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				},
				colors: {
					'tory-blue': {
						'50': '#f1f8fe',
						'100': '#e1f0fd',
						'200': '#bde1fa',
						'300': '#83c9f6',
						'400': '#40aef0',
						'500': '#1894df',
						'600': '#0b75be',
						'700': '#0b67aa',
						'800': '#0d4f7f',
						'900': '#10436a',
						'950': '#0b2a46',
					},
					text: '#F4F4F9',
					background: '#586F7C',
					accent: '#2F4550',
					accentLight: '#576977',
					light: '#B8DBD9',
					gray: '#0D0D0D',
					lightGray: '#DCDCDD'
				},
				fontFamily: {
					'bowlby': ['var(--font-bowlby)']
				}
			},
	},
	plugins: [],
}

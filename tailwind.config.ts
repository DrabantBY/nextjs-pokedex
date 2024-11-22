import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{tsx,html}',
		'./components/**/*.{tsx,html}',
		'./app/**/*.{tsx,html}',
		'./ui/**/*.{tsx,html}',
	],
	theme: {
		screens: {
			xs: '420px',
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
		},
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
			},
		},
	},
	plugins: [],
};
export default config;

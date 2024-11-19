import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{tsx,html}',
		'./components/**/*.{tsx,html}',
		'./app/**/*.{tsx,html}',
		'./ui/**/*.{tsx,html}',
	],
	theme: {
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

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: 'hsl(var(--primary))',
				accent: 'hsl(var(--accent))',
				text: 'hsl(var(--text))',
				border: 'hsl(var(--border))',
				background: 'hsl(var(--background))',
				dark: 'hsl(var(--dark))',
			},
			fontFamily: {
				gt: ['GTAmericaExtended', 'sans-serif'],
				sans: ['BasicCommercial', 'Helvetica' ,'sans-serif'],
				serif: ['NeueWorldCondensed', 'serif'],
			}
		},
	},
	plugins: [],
}

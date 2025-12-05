/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme"; // CAMBIO: Usar import en lugar de require

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				mono: ['"JetBrains Mono"', ...defaultTheme.fontFamily.mono],
				sans: ['"JetBrains Mono"', ...defaultTheme.fontFamily.sans],
			},
            // ... resto de tu configuración de colores y animaciones ...
			colors: {
				stibios: {
					bg: "#050505",
					surface: "#0F0F0F",
					border: "#27272a",
					text: "#e4e4e7",
					dim: "#a1a1aa",
					accent: "#00FF94",
				}
			},
			animation: {
				'cursor-blink': 'blink 1s step-end infinite',
			},
			keyframes: {
				blink: {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0' },
				}
			}
		},
	},
	plugins: [],
}
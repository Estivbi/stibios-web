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
					bg: "#1D1F27",
					surface: "#252830",
					border: "#2E3140",
					text: "#F8FAFC",
					dim: "#94A3B8",
					accent: "#00D1FF",
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
/** @type {import('tailwindcss').Config} */
export default {
	darkMode: "class",
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		container: {
			center: true,
			screens: {
				sm: "640px",
				md: "768px",
				lg: "768px",
				xl: "768px",
			},
		},
		extend: {
		  transitionTimingFunction: {
			"real-in-out": "cubic-bezier(0.42,0,0.58,1)",
		  },
		},
	  },
	  plugins: [require("@tailwindcss/typography")],
}

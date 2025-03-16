import type { Config } from "tailwindcss"

const config: Config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
		"*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			colors: {
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: {
					DEFAULT: "#FF1F7D", // Fucsia (ahora como color principal)
					foreground: "#FFFFFF",
				},
				secondary: {
					DEFAULT: "#A94DB4", // Púrpura
					foreground: "#FFFFFF",
				},
				accent: {
					DEFAULT: "#D9A84E", // Dorado (ahora como acento)
					foreground: "#FFFFFF",
				},
				teal: {
					DEFAULT: "#4ECCC6", // Turquesa
					foreground: "#FFFFFF",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
				"pulse-fuchsia": {
					"0%, 100%": {
						boxShadow: "0 0 15px 5px rgba(255, 31, 125, 0.3)",
					},
					"50%": {
						boxShadow: "0 0 25px 10px rgba(255, 31, 125, 0.5)",
					},
				},
				float: {
					"0%, 100%": { transform: "translateY(0)" },
					"50%": { transform: "translateY(-10px)" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"pulse-fuchsia": "pulse-fuchsia 3s infinite ease-in-out",
				float: "float 3s infinite ease-in-out",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
}

export default config


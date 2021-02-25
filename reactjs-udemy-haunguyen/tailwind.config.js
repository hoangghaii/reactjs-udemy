module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
		colors: {
			red: {
				DEFAULT: "#e3342f",
				500: "#f56565",
			},
			green: "#38c172",
			teal: {
				DEFAULT: "#4dc0b5",
				700: "#2c7a7b",
				600: "#319795",
				100: "#e6fffa",
			},
			grey: {
				DEFAULT: "#9babb4",
				darkest: "#364349",
			},
			gray: {
				900: "#111827",
				800: "#1f2937",
				700: "#4a5568",
				500: "#6b7280",
				400: "#9ca3af",
				300: "#d1d5db",
				200: "#edf2f7",
			},
			pink: {
				600: "#d53f8c",
			},
			blue: {
				500: "#4299e1",
				400: "#63b3ed",
			},
			yellow: {
				500: "#ecc94b",
				300: "#fcd34d",
				200: "#fde68a",
			},
			indigo: {
				700: "#4338ca",
				600: "#4f46e5",
				500: "#6467f2",
				400: "rgb(156, 163, 175)",
			},
			white: "#ffffff",
			black: {
				50: "rgba(0,0,0,0.5)",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};

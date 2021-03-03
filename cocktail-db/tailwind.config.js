const colors = require("tailwindcss/colors");

module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
		colors: {
			transparent: "transparent",
			current: "currentColor",
			red: {
				DEFAULT: "#e3342f",
				500: "#f56565",
			},
			green: colors.green,
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
			gray: colors.gray,
			pink: colors.pink,
			blue: {
				500: "#4299e1",
				400: "#63b3ed",
			},
			yellow: colors.yellow,
			orange: colors.orange,
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

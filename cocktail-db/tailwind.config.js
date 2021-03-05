const colors = require("tailwindcss/colors");

module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: "media", // or 'media' or 'class'
	theme: {
		extend: {},
		colors: {
			transparent: "transparent",
			current: "currentColor",
			red: colors.rose,
			green: colors.green,
			teal: colors.teal,
			grey: colors.grey,
			gray: colors.gray,
			pink: colors.pink,
			blue: colors.blue,
			yellow: colors.amber,
			orange: colors.orange,
			indigo: colors.indigo,
			white: colors.white,
			black: colors.black,
			"light-blue": colors.lightBlue,
		},
	},
	variants: {
		animation: ["responsive", "motion-safe", "motion-reduce"],
	},
	plugins: [],
};

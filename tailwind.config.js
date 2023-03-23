/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",

		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			screens: {
				sm: "600px",
				md: "768px",
				lg: "1024px",
				xl: "1440px",
				"2xl": "1680px",
				"3xl": "1920px",
			},
			colors: {
				black: "#242424",
				red: "#E7132E",
				blue: "#416088",
				lightBlue: "#416088",
			},
		},
	},
	plugins: [],
};

module.exports = {
	purge: [
		"./src/**/*.{js,jsx,ts,tsx}",
		"./public/index.html",
	],
	darkMode: "class", // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				light: "#ffffff",
				dark: "#000000",
				darkTxtPrimary: "#BB86FC",
				darkTxtSecondary: "#333333",
				darkBgPrimary: "#282c35",
				darkBgSecondary: "#161b22",
				lightBgPrimary: "#543543",
				lightBgSecondary: "#DBEAFE",
				lightTxtPrimary: "#595433",
				lightTxtSecondary: "#444444",
			},
			container: {
				center: true,
				padding: {
					DEFAULT: "1rem",
				},
			},
			fontFamily: {
				title: ["Titillium\\ Web", "sans-serif"],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};

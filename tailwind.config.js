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
			height: {
				"5v": "5vh",
				"10v": "10vh",
				"20v": "20vh",
				"30v": "30vh",
				"40v": "40vh",
				"50v": "50vh",
				"60v": "60vh",
				"70v": "70vh",
				"80v": "80vh",
				"90v": "90vh",
				"100v": "100vh",
			},
			minHeight: {
				"5v": "5vh",
				"10v": "10vh",
				"20v": "20vh",
				"30v": "30vh",
				"40v": "40vh",
				"50v": "50vh",
				"60v": "60vh",
				"70v": "70vh",
				"80v": "80vh",
				"90v": "90vh",
				"100v": "100vh",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};

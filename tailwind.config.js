const colors = require("tailwindcss/colors");

module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: "class", // or 'media' or 'class'
	theme: {
		colors: {
			light: "#ffffff",
			dark: "#000000",
			bgPrimary: "#070707",
			bgSecondary: "#121212",
			txtPrimary: "#BB86FC",
			txtSondary: "#333333",
		},
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
	important: true,
};

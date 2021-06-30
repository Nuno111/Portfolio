module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: "class", // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				light: "#ffffff",
				dark: "#000000",
				bgPrimary: "#070707",
				bgSecondary: "#121212",
				txtPrimary: "#BB86FC",
				txtSecondary: "#333333",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};

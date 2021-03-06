module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        light: "#ffffff",
        dark: "#333333",
        darkTxtPrimary: "#BB86FC",
        darkBgPrimary: "#282c35",
        darkBgSecondary: "#161b22",
        lightBgPrimary: "#f9fafc",
        lightBgSecondary: "#ffffff",
        lightTxtPrimary: "#7309F7",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          md: "4rem",
        },
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
      padding: {
        "1/3": "33.33333%",
        "2/3": "66.66667%",
        "3/4": "75%",
      },
    },
  },
  variants: {
    extend: {
      animation: ["hover", "focus", "group-hover"],
    },
  },
  plugins: [],
};

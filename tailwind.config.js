module.exports = {
  content: ["./src/*.{ts,tsx}", "./src/**/*.{ts,tsx}", "./public/index.html"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#222",
      white: "#fff",
      blue: {
        100: "#4169E1",
        200: "#1010AE",
      },
      red: "#AE1010",
      green: "#11995B",
      modal: "#C8C8C8",
    },

    extend: {
      backgroundImage: (theme) => ({
        auth: "url('assets/AuthBG.png')",
      }),
    },
  },
  plugins: [],
};

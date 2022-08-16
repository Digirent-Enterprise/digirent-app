module.exports = {
  content: ["./src/*.{ts,tsx}", "./src/**/*.{ts,tsx}", "./public/index.html"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#222",
      white: "#fff",
      gray: "#777",
      blue: {
        100: "#4169E1",
        200: "#1010AE",
        300: "#153289",
      },
      red: "#AE1010",
      green: "#11995B",
      pink: "#FF385C",
    },

    extend: {
      backgroundImage: (theme) => ({
        auth: "url('https://discloud-storage.herokuapp.com/file/59382cf8fe3ed58ceee5c861ed202e29/auth-bg.png')",
        banner:
          "url('https://discloud-storage.herokuapp.com/file/a211e4ea3bfac9fff6ca45c6e86cc42f/nasa-1-lf-i-7-wk-gwz-4-unsplash.jpg')",
      }),
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

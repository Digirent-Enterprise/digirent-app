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
        morning:
          "url('https://discloud-storage.herokuapp.com/file/2e8bbfe3b132c030a5a74587f90e34b0/dawid-zawila-g-3-rw-6-y-02-d-0-unsplash.jpg')",
        afternoon:
          "url('https://discloud-storage.herokuapp.com/file/170da580769674d3af9295790eef604c/mufid-majnun-l-ux-l-1-ft-4-uyw-unsplash.jpg')",
        evening:
          "url('https://discloud-storage.herokuapp.com/file/a91a2f601da639fc619f9f947a5b4d9e/jaanus-jagomagi-m-gxe-lz-izlq-0-unsplash.jpg')",
        banner:
          "url('https://discloud-storage.herokuapp.com/file/67c468b32ac3b2872fe00813a9022e80/maxresdefault.jpg')",
      }),
      transitionProperty: {
        width: "width",
        height: "height",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};

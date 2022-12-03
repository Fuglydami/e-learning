/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        wave: {
          "0%": { transform: "rotate(0.0deg)" },
          "10%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10.0deg)" },
          "60%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
      },
      animation: {
        "waving-hand": "wave 2s linear infinite",
      },
      width: {
        corousel: "28rem",
      },
    },
    colors: {
      sidebarOrange: "#FFF1E7",
      base_range: "#C85100",
      dark_range: "#380101",
      customWhite: "#fff",
      extralightOrange: "#ffddbe2b",
      lightGrey: "#898D88",
      whine: "#380101",
      extraLightGrey: "#E5E5E5",
      lightPink: "#DA7467",
      inputColor: "#FAF8F7",
      lightGreen: "#5EA3B4",
      opacityWhite: "#ffffff31",
    },
  },
  plugins: [require("tailwindcss-animate")],
};

/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        darkBg: "rgba(37, 43, 66, 1)",
        lightText: "rgba(255, 255, 255, 1)",
        textColor: "rgba(37, 43, 66, 1)",
        secondText: "rgba(115, 115, 115, 1)",
        primaryColor: "rgba(35, 166, 240, 1)",
        hoverText: "rgba(42, 124, 199, 1)",
        cyanBg: "rgba(45, 139, 192, 0.75)",
        mutedColor: "rgba(189, 189, 189, 1)",
        secondaryColorGreen: "rgba(35, 133, 109, 1)",
        yellow: "rgba(255, 206, 49, 1)",
        alertColor: "rgba(231, 124, 64, 1)",
        violet: "rgba(151, 125, 244, 1)",
        successColor: "rgba(45, 192, 113, 1)",
        dangerRed: "rgba(231, 64, 64, 1)",
        lightGray: "rgba(250, 250, 250, 1)",
        roseBg: "rgba(255, 233, 234, 1)",
        zinc: "rgba(133, 133, 133, 1)",
        stone: "rgba(196, 196, 196, 0.2)",
        zinc100: "rgba(243, 243, 243, 1)",
      },
    },
  },
  plugins: [],
});

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: " #2b3440",

          secondary: "#FE9F08",

          accent: "#FFBE55",

          neutral: "#2b3440",

          "base-100": "#ffffff",

          info: "#00AFED",

          success: "#36d399",

          warning: "#fbbd23",

          error: "#f87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};

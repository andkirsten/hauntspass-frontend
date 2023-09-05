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
          primary: "#1B0F0B",

          secondary: "#FE9F08",

          accent: "#00AFED",

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

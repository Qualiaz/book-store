/** @type {import('tailwindcss').Config} */
//prettier-ignore
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        "110": "25.5rem",
      },
      colors: {
        light: {
          primary: "#bcfc92",
          secondary: "#e879f9",
          accent: "#92cee5",
          neutral: "#19191f",
          "base-100": "#f7f7f8",
          info: "#6dbbd5",
          success: "#2ee090",
          warning: "#dd8f08",
          error: "#e66756",
        },
        dark: {
          primary: "#bcfc92",
          secondary: "#e879f9",
          accent: "#92cee5",
          neutral: "#19191f",
          "base-100": "#3b3b40",
          info: "#6dbbd5",
          success: "#2ee090",
          warning: "#dd8f08",
          error: "#e66756",
        },
      },
    },
  },
  plugins: [],
};

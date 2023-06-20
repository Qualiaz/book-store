/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: {
          primary: "#e2ce31",
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
          primary: "#e2ce31",
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

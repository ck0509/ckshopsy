import { postcss } from 'tailwindcss';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  // sende kontorl space calismiyor mu? control'e basip space e 
  // bastigimzda tamamlama cikmasi lazim. seninkis dil degistiemek 
  // istiyor. ha bılmıyorum ok.
  css: {
    postcss
  }, 
  theme: {
    extend: {
      colors: {
        primary: "#fea928",
        secondary: "#ed8900",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "mavlin-blue": "#052c9d",
        "mavlin-gold": "#B29063",
        "layover-gray-500": "#37454D",
        "layover-black": "#040707",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        montserratAlternates: ["Montserrat Alternates", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
        karla: ["Karla", "sans-serif"],
        arimo: ["Arimo", "sans-serif"],
      },
    },
  },
  plugins: [],
};

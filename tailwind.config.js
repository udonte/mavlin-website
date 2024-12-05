/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "mavlin-blue": "#052c9d",
        "mavlin-gold": "#B29063",
        "mavlin-farms-green": "#22552A",
        "mavlin-farms-orange": "#f79828",
        "mavlin-krono-brown": "#5f281e",
        "mavlin-haraya-blue": "#0c1f3c",
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

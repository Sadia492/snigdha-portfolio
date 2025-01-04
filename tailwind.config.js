/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#634fe2",
        secondary: "#4EA5D9",
        accent: "#ca057a",
      },
    },
  },
  plugins: [require("daisyui")],
};

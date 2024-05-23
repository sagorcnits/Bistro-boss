/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        paragraphColor: "#D99904",
      },
    },
  },
  plugins: [require("daisyui")],
};

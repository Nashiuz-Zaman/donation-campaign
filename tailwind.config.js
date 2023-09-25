/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xsm: "480px",
        "3xl": "1700px",
      },
      colors: {
        primary: "#FF444A",
      },
    },
  },
  plugins: [],
};

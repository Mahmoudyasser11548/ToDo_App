/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      white: "#ffffff",
      primary: "#007AFF",
      lightGray: "#EDECEF",
      gray550: "#939292",
      gray650: "#8a8a8a",
      gray4: "#898681",
      gray5: "#887d8e",
      gray9: "#101928",
      gray8: "#29262E",
      transparent: "transparent",
      grey: "#878787",
    },
  },
  plugins: [],
};

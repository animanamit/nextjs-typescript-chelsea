module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      lightblue: "#d7eeff",
      darkblue: "#1f4fb1",
      red: "#f15564",
      greengray: "67777a",
      blk: "#0c1708",
      midblue: "#a5c3e1",
      bluegray: "#556c8d",
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        inputText: ["Monoton"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

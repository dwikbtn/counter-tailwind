module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        inputText: ["Monoton"],
      },
      colors: {
        border: "#F59D50",
        firstGr: "#EE8C38",
        secondGr: "#F48F32",
        timerBg: "#131514",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      borderWidth: {
        outer: "15px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

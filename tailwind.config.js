module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: { max: "429px" },
      sm: { min: "430px", max: "767px" },
      md: { min: "768px", max: "1023px" },
      lg: { min: "1024px", max: "1279px" },
      xl: { min: "1280px", max: "1535px" },
      "2xl": { min: "1536px" },
    },
    extend: {
      keyframes: {
        slideIn: {
          "0%": { right: "-300px", opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        slideIn: "slideIn 0.4s",
        fadeIn: "fadeIn 0.4s",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        base: ['"Cormorant Upright"', "serif"],
        alt: ['"Open Sans"', "sans-serif"],
      },
      colors: {
        golden: "#DCCA87",
        black: "#0C0C0C",
        gray: "#545454",
        crimson: "#F5EFDB",
        grey: "#AAAAAA",
        white: "#FFFFFF",
      },
      animation: {
        "slide-bottom":
          "slide-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
      },
      keyframes: {
        "slide-bottom": {
          "0%": { transform: "translateY(-25%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".smooth-scroll": {
          scrollBehavior: "smooth",
        },
      });
    },
  ],
};

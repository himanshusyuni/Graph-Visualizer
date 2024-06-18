/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "dancing-script": ["Dancing Script", "cursive"],
      },
      backgroundPosition: {
        "center-bottom-30": "center bottom 30%",
        "center-bottom-20": "center bottom 20%",
      },
      scale: {
        102: "1.02",
      },
      fontWeight: {
        400: "400",
        500: "500",
        600: "600",
        700: "700",
      },
      colors: {
        brown: {
          50: "#f9f4ee",
          100: "#f2e9d7",
          200: "#dfcfa9",
          300: "#cbb47b",
          400: "#b89a4d",
          500: "#a58020",
          600: "#835e17",
          700: "#624712",
          800: "#41330d",
          900: "#201906",
        },
      },
    },
  },
  plugins: [],
};

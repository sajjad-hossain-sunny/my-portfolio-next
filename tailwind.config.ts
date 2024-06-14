import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        syne: ["Syne", "sans-serif"],
      },
      colors: {
        primary: "#0DCAF0",
        secondary: {
          100: "#F2F4F4",
          200: "#575353",
          300: "#4C4D4D",
          400: "#6C757D",
          500: "#343A40",
          600: "#252B33",
          700: "#212529",
        },
        sideBarBg: "#111418",
        red: "#E3356F",
        overlay: "rgba(0,0,0,0.6)",
      },
      backgroundImage: {
        'hero-pattern': "url('/images/banner.jpeg')",
      },
      boxShadow: {
        btnShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.40)",
        iconShadow: "0px 2px 5px 0px rgba(0, 0, 0, 0.25)",
        resumeShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.15);",
      },
      maxWidth: {
        customContainer: "1170px",
      },
      borderRadius: {
        "30": "30px",
      },
      spacing: {
        "70": "70px",
        "180": "180px",
        "166": "166px",
      },
    },
  },
  plugins: [],
};
export default config;

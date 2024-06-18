import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "12px",
          xs: "10px",
          sm: "10px",
        },
        screens: {
          xs: "100%",
          sm: "100%",
          lg: "960px",
          xl: "1070px",
          "2xl": "1070px",
        },
      },
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        syne: ["Syne", "sans-serif"],
      },
      fontSize: {
        '22': '22px',
        '25': '25px',
        '28': '28px',
        '130': '130px',
      },
      lineHeight: {
        '50': '50px',
        '83': '83px',
      },
      colors: {
        primary: "#0DCAF0",
        secondary: {
          100: "#F2F4F4", // title color
          200: "#575353", // paragraph texts or light black
          300: "#4C4D4D",
          400: "#6C757D",
          500: "#343A40",
          600: "#252B33", // dark black
          700: "#212529", // subtitle or hard black
        },
        sideBarBg: "#111418",
        customRed: "#E3356F",
        overlay: "rgba(0,0,0,0.6)",
        facebook: "#1877F2",
        github: "#24292e",
        linkedin: "#0073AF",
        whatsapp: "#25D366",
        instagram: "#E15546",
        skillBar: "#E9ECEF",
      },
      backgroundImage: {
        "hero-pattern": "url('/images/banner.jpeg')",
      },
      boxShadow: {
        btnShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.40)",
        iconShadow: "0px 2px 5px 0px rgba(0, 0, 0, 0.25)",
        resumeShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.25);",
        serviceShadow: "0 2px 5px 0 rgba(0, 0, 0, 0.25)",
      },
      maxWidth: {
        customContainer: "1170px",
      },
      borderRadius: {
        "5px": "5px",
        "30": "30px",
      },
      spacing: {
        "3px": "3px",
        "5px": "5px",
        "7px": "7px",
        "13px": "13px",
        "21": "21px",
        "70": "70px",
        "76": "76px",
        "180": "180px",
        "166": "166px",
      },
      gap: {
        '50': '50px',
      }
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
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
        "22": "22px",
        "25": "25px",
        "28": "28px",
        "42": "42px",
        "52": "52px",
        "130": "130px",
      },
      lineHeight: {
        "50": "50px",
        "83": "83px",
      },
      colors: {
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          100: "hsl(var(--secondary-100))", //title color
          "200": "#575353", //paragraph texts or light black
          "300": "#4C4D4D",
          "400": "#6C757D",
          "500": "#343A40",
          600: "hsl(var(--secondary-600))", //dark black
          "700": "#212529", //subtitle or hard black color
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        sideBarBg: "#111418",
        customRed: "#E3356F",
        overlay: "rgba(0,0,0,0.7)",
        projectOverlay: "rgba(0,0,0,0.5)",
        facebook: "#1877F2",
        github: "#24292e",
        linkedin: "#0073AF",
        whatsapp: "#25D366",
        instagram: "#E15546",
        skillBar: "#E9ECEF",
        glass: "rgba(0, 0, 0, 0.4)",
        componentBg: "#F8F9FA",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
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
      dropShadow: {
        "3xl": "0 5px 8px rgba(0, 0, 0, 0.20)",
      },
      maxWidth: {
        customContainer: "1170px",
      },
      borderRadius: {
        "5px": "5px",
        "7px": "7px",
        "30": "30px",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      spacing: {
        "3px": "3px",
        "5px": "5px",
        "7px": "7px",
        "13px": "13px",
        4.5: "18px",
        5.5: "22px",
        "21": "21px",
        "67": "67px",
        "70": "70px",
        "73": "73px",
        "76": "76px",
        "136": "136px",
        "152": "152px",
        "166": "166px",
        "180": "180px",
        popupGallery: "600px",
      },
      gap: {
        "50": "50px",
      },
      transitionTimingFunction: {
        "custom-bezier": "cubic-bezier(0.995, -0.265, 0.855, 0.505)",
      },
      transitionDuration: {
        400: "400ms",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("tailwind-scrollbar")],
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      xs: ["12px", "18px"],
      sm: ["14px", "20px"],
      md: ["16px", "24px"],
      lg: ["18px", "26px"],
      xl: ["20px", "28px"],
      "2xl": ["24px", "32px"],
      "3xl": ["30px", "38px"],
      "4xl": ["36px", "44px"],
      "5xl": ["48px", "56px"],
      "6xl": ["60px", "68px"],
      "8xl": ["96px", "104px"],
      "9xl": ["120px", "128px"],
      custom1: ["135px", "135px"],
    },
    container: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1650px",
      },
    },
    extend: {
      colors: {
        black: "#222222",
        malachite: {
          50: "#edffef",
          100: "#d6ffdd",
          200: "#afffbc",
          300: "#71ff89",
          400: "#2dfb4e",
          500: "#02d825",
          600: "#00bf1c",
          700: "#00951a",
          800: "#07741a",
          900: "#085f18",
          950: "#00360a",
        },
      },
      backgroundImage: {
        // hero: "url('/images/hero-chummy.png')",
      },
    },
  },
};
export default config;

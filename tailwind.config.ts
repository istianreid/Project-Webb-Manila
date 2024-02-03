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
      lg: ["18px", "28px"],
      xl: ["20px", "30px"],

      h6: ["24px", "32px"],
      h5: ["30px", "38px"],
      h4: ["36px", "44px"],
      h3: ["48px", "60px"],
      h2: ["60px", "72px"],
      h1: ["72px", "90px"],
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

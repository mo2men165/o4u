import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#F5F0FA",
          100: "#E9DBF5",
          200: "#D3B7EB",
          300: "#B083D9",
          400: "#8C58C0",
          500: "#5B2D8E",
          600: "#4D2578",
          700: "#3A1A5E",
          800: "#2A1245",
          900: "#1C0B30",
          DEFAULT: "#5B2D8E",
        },
        "primary-dark": "#3A1A5E",
        gold: {
          400: "#E8C770",
          500: "#D4AF37",
          600: "#B3902A",
        },
        ink: "#161221",
        accent: "#F8F7FA",
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', "system-ui", "sans-serif"],
        body: ['"DM Sans"', "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 2px 12px rgba(28, 11, 48, 0.06)",
        elevated: "0 16px 40px -8px rgba(28, 11, 48, 0.18)",
        glow: "0 0 0 1px rgba(255,255,255,0.06), 0 20px 60px -10px rgba(91,45,142,0.45)",
      },
      backgroundImage: {
        "mesh-primary":
          "radial-gradient(ellipse 80% 60% at 20% 0%, rgba(180,131,217,0.35), transparent), radial-gradient(ellipse 60% 50% at 90% 20%, rgba(212,175,55,0.18), transparent), linear-gradient(135deg, #2A1245 0%, #3A1A5E 45%, #5B2D8E 100%)",
        "grid-pattern":
          "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;

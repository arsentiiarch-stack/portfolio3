import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Neutral ramp (OKLCH-inspired, off-black to off-white)
        surface: {
          base:    "#111113", // ~12% lightness
          raised:  "#1a1a1d",
          border:  "#2a2a2e",
          muted:   "#3a3a40",
        },
        text: {
          primary:   "#f0f0f2", // ~97% lightness
          secondary: "#a0a0aa",
          muted:     "#6b6b75",
        },
        // Gradient accent pulled from logo: yellow → red → violet
        accent: {
          yellow:  "#f5a623",
          red:     "#e03c3c",
          violet:  "#9b3dcf",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-syne)", "system-ui", "sans-serif"],
      },
      spacing: {
        // 8-unit rhythm
        "18": "4.5rem",
        "22": "5.5rem",
      },
      borderRadius: {
        sm: "4px",
        md: "8px",
        lg: "16px",
      },
      transitionDuration: {
        DEFAULT: "180ms",
      },
      transitionTimingFunction: {
        DEFAULT: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};

export default config;

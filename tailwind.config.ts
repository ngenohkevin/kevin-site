import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0A0A0F",
          soft: "#14141C",
          body: "#1A1A22",
          mute: "#2C2C36",
        },
        cream: {
          DEFAULT: "#F6F2EA",
          soft: "#EFE9DD",
          line: "#E5DFD0",
        },
        gold: {
          DEFAULT: "#C9A368",
          deep: "#A98347",
          light: "#E3C48A",
        },
        mute: {
          DEFAULT: "#6B6B75",
          soft: "#9A9AA3",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-instrument)", "Georgia", "serif"],
      },
      letterSpacing: {
        tightest: "-0.025em",
        wider2: "0.22em",
        wider3: "0.25em",
      },
    },
  },
  plugins: [],
} satisfies Config;

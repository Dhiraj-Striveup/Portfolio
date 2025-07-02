import type { Config } from "tailwindcss";

export default {
  
  content: [
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "375px",
        md: "768px",
        lg: "1200px",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem", 
          md: "2rem",
        },
      },
      fontFamily: {
        sans: 'var(--font-sans)',
        serif: 'var(--font-serif)',
      },
      animation: {
        pulseSlow: 'pulse 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;

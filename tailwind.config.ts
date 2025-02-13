import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '2C3E50',
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        cormorantGaramond: ['Cormorant Garamond', 'sans-serif'],
        sans: ['Athiti', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;

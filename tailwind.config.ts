import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgba(var(--background))",
        copy: "rgba(var(--copy))",
      },
      fontFamily: {
        sans: ['var(--font-lato)', 'Lato', 'sans-serif'],
        serif: ['var(--font-arvo)', 'Arvo', 'serif'],
      },
    },
  },
  plugins: [],
};
export default config;

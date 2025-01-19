import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        background: "rgba(var(--background))",
        gradient: "linear-gradient(to bottom, #2980b9, #6dd5fa, #ffffff);",
        copy: "rgba(var(--copy))",
      },
      backgroundImage: {
        gradient: "var(--gradient)",
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

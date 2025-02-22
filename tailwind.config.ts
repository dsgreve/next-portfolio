import type { Config } from "tailwindcss";
import { PluginAPI } from 'tailwindcss/types/config';

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
        copy: "rgba(var(--copy))",
        'contrast-bg': "rgba(var(--background-contrast))",
        'contrast-copy': "rgba(var(--copy-contrast))",
        'contrast-border': "rgba(var(--border-contrast))",
      },
      backgroundImage: {
        gradient: "var(--gradient)",
         'gradient-text': 'var(--gradient-text)',
      },
      fontFamily: {
        sans: ['var(--font-lato)', 'Lato', 'sans-serif'],
        serif: ['var(--font-arvo)', 'Arvo', 'serif'],
      },
    },
  },
  plugins: [
    function ({ addUtilities }: PluginAPI) {
      addUtilities({
        '.text-gradient': {
          'background-clip': 'text',
          '-webkit-background-clip': 'text',
          'color': 'transparent',
        },
      });
    },
  ],
};
export default config;

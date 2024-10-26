import type { Config } from "tailwindcss";
import {PluginAPI}  from 'tailwindcss/types/config';


const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        avenir: ['Avenir', 'sans-serif'],
      },
      letterSpacing:{
        '1': '0.01em',
      },
      screens: {
        small: '670px',
        medium: '890px',
        large: '1000px',
      },
    },
  },
  plugins: [function ({ addUtilities }:PluginAPI) {
    addUtilities({
      '.no-scrollbar': {
        /* Hide scrollbar for WebKit browsers */
        '-webkit-overflow-scrolling': 'touch',
        '-ms-overflow-style': 'none', /* IE and Edge */
        'scrollbar-width': 'none', /* Firefox */
      },
      '.no-scrollbar::-webkit-scrollbar': {
        display: 'none', /* Safari and Chrome */
      },
    });
  },],
};
export default config;

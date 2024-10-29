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
        tablet: '700px',
        desktop: '1000px',
      },
      clipPath: { //with tailwind-clip-path plugin I now have clip-path as a utility class and can even extend it here
        'circle-open': 'circle(75% at 50% 50%)',
        'circle-closed': 'circle(0% at 50% 50%)',
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
  },require('tailwind-clip-path')], //installed and required because tailwind does not come with clip-path by default
};
export default config;

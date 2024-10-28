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
      keyframes: {
        slideIn: {
          '0%': { clipPath: 'circle(0% at 100% 0)' },  // Start from a tiny circle at the top-right
          '100%': { clipPath: 'circle(150% at 100% 0)' },  // Expand to cover the whole element
        },
        slideOut: {
          '0%': { clipPath: 'circle(150% at 100% 0)' }, 
          '100%': { clipPath: 'circle(0% at 100% 0)' },
        },
        slideIn1: {
          '0%': { clipPath: 'circle(0% at 50% 50%)' },  
          '100%': { clipPath: 'circle(75% at 50% 50%)' },
        },
        slideOut1: {
          '0%': { clipPath: 'circle(75% at 50% 50%)' }, 
          '100%': { clipPath: 'circle(0% at 50% 50%)' },
        },
        slideIn2: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideOut2: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(-100%)', opacity: '0' },
        },
        slideIn3: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideOut3: {
          '0%': { transform: 'translateX(0)', opacity: '1' },
          '100%': { transform: 'translateX(100%)', opacity: '0' },
        },
      },
      animation: {
        slideIn: 'slideIn 0.4s ease forwards',
        slideOut: 'slideOut 0.4s ease forwards',
        slideIn1: 'slideIn1 0.4s ease forwards',
        slideOut1: 'slideOut1 0.4s ease forwards',
        slideIn2: 'slideIn2 0.4s ease forwards',
        slideOut2: 'slideOut2 0.4s ease forwards',
        slideIn3: 'slideIn3 0.4s ease forwards',
        slideOut3: 'slideOut3 0.4s ease forwards',
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

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      xs: '1rem',
      sm: '1.50rem',
      lg: '2rem',
      xl: '3rem',
      '2xl': '4rem',
      '4xl': '5rem',
      '6xl': '6rem',
      '8xl': '7rem'
    },

    extend: {
      colors: {
        "brand-white": "#f9f9f7",
        "brand-dark": "#302b70",
        "brand-gray": "#6D6D6D",
        "brand-regular": "#6061b0",
        "brand-light": "#787cd1"
      },
    },
  },
  plugins: [],
};
export default config;

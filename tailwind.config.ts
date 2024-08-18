import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ['class'],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      xs: '1rem',
      sm: '1.25rem',
      md:'1.50rem',
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
        "brand-light": "#787cd1",
        "brand-logo": "#7404B4",
        "pill-b" : "#a48fff1f",
        "offWhite" : "#FAF9F6",
        "AliceBlue" : "#F0F8FF",
        "Pearl" : "#FBFCF8",
        "EggShell" : "#FFF9E3",
        "Coconut": "#FFF1E6",
        "Parchment": "#FBF5DF",
        "DeepNavyBlue" : "#011222",
        "RichBlack" :"#020D19",
        "DarkSlateGray" :"#0D1717",
        "MidNightBlue" : "#101720",
        "Obsidian" : "#0B1215",
        "OilBlack" : "#0C0C0C",
        "CharcoalGray" : "#171717",
      },
    },
  },
  plugins: [],
};
export default config;

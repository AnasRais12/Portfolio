/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      transform: ['responsive'],
      rotate:{ 'y-180': '180deg',
        'y-0': '0deg',
    },
     
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        Shade: 'var(--shade)',
        heading:  'var(--heading)'
      },
      fontFamily: {
        Luckiest: ["Luckiest Guy", "cursive"],
        Noto: ["Noto Sans HK", "sans-serif;"],
        Fasicinite :["Fascinate Inline", "system-ui;"],
        Lobester: ["Lobster", "sans-serif"],
         Titan:["Titan One", "sans-serif"],
         Teko:["Teko", 'sans-serif']
        
      },
      backgroundImage:{
        dark_cloud: "url('/images/cloudDark.png')",
        light_cloud: "url('/images/cloudBg.png')",

      },
      boxShadow: {
        'custom': '0px 0px 20px rgba(0, 0, 0, 0.5)',
      }
    },
  },
  
  plugins: [],
};

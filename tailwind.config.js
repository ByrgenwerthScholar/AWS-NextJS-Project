/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins'],
        'mw': ['Merriweather'],
      },
      colors: { 
        danger: '#f44336',
        success: '#4fb15b',
        background: '#F8FBF4',
        warning: '#cca123',
        'fern': '#56b776',
        'revolver': '#211835',
        'apricot': '#EF946B',
        'hippie_pink': '#C2465E',
      },
    },
  },
}

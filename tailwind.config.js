/** @type {import('tailwindcss').Config} */

const plugin= require("tailwindcss/plugin")

const Myclass= plugin (function ({addUtilities}){

  addUtilities({
    ".my-rotate-y-180":{
      transform:"rotateY(180deg)",
    },
    ".preseve-3d":{
        transformStyle: "preserve-3d",
    },

    ".perspective":{
      perspective: "1000px",
    },

    ".backface-hidden": {
      backfaceVisibility: "hidden",
    },
    

  });

});


module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    animation: {
      'spin-slow': 'spin 8s linear infinite',
    }
  },
  plugins: [
    require('tailwindcss-animated'), Myclass
  ],
}

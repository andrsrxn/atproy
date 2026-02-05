/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#b8d9eb', // Light blue
          DEFAULT: '#002f6d', // Default blue
          dark: '#001129' // Dark blue
        },
        secondary: {
          light: '#6bd3f2', // Light lightblue
          DEFAULT: '#00a6e2', // Default lightblue
          dark: '#0076a2' // Dark lightblue
        },
        details: {
          light: '#7be590', // Light green
          DEFAULT: '#00943c', // Default green
          dark: '#005e19' // Dark green
        },
        decoration: {
          light: '#c9ebda', // Light gray
          DEFAULT: '#aac8b9', // Default gray
          dark: '#99b1a5' // Dark gray
        }
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 40s linear infinite'
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' }
        }
      }
    }
  },
  plugins: [require('tailwindcss-animated')]
}

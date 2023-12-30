/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'orange-400': '#FFA94D',
        'orange-500': '#FF8C00',
        'orange-600': '#E07C00',
      },
    },
  },
  plugins: [],
}


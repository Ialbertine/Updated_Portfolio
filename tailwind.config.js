/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./Portfolio/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'sm': '375px',  // Small screens and up
        'md': '768px',  // Medium screens and up
        'lg': '1024px', // Large screens and up
        'xl': '1280px', // Extra large screens and up
      },
    },
  },
  plugins: [],
}

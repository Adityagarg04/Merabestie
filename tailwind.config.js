/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        italianno: ["Italianno", "cursive"],
        jetbrains: ['JetBrains Mono', 'monospace'],
        Kdam: ["Kdam Thmor Pro", 'serif'],
        Kelly: ['Kelly Slab', 'serif'],
      }
    },
  },
  plugins: [],
}
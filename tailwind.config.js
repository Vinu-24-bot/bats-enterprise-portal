/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(220 20% 4%)",
        foreground: "hsl(210 20% 92%)",
        primary: "hsl(173 80% 50%)", // Genius Hub Cyan
        accent: "hsl(260 70% 60%)",   // Forge Pro Purple
        combo: "hsl(45 93% 47%)",     // Combo Gold
        card: "hsl(220 18% 8%)",
        border: "hsl(220 14% 12%)",
      },
      fontFamily: {
        display: ['Orbitron', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        'bg': 'var(--bg)',
        'text': 'var(--text)',
        'text-secondary': 'var(--text-secondary)',
        'border': 'var(--border)',
        'accent': 'var(--accent)',
        'accent-hover': 'var(--accent-hover)',
      },
      height: {
        '15': '60px',
        '30': '120px',
      },
      width: {
        '15': '60px',
      },
    },
  },
  plugins: [],
} 
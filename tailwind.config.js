/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#FF3B3B',
          blood: '#B01313',
          coal: '#111111',
          smoke: '#1F1F1F',
        },
      },
      fontFamily: {
        display: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 24px rgba(255, 59, 59, 0.35)',
        soft: '0 12px 40px rgba(0, 0, 0, 0.24)',
      },
      backgroundImage: {
        'radial-red':
          'radial-gradient(circle at 15% 20%, rgba(255, 59, 59, 0.28), transparent 40%), radial-gradient(circle at 80% 10%, rgba(176, 19, 19, 0.22), transparent 36%)',
      },
    },
  },
  plugins: [],
};

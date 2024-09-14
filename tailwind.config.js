module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        'xl': '0 10px 20px rgba(0, 0, 0, 0.1)',
        '2xl': '0 15px 30px rgba(0, 0, 0, 0.1)',
      },
      colors: {
        'light-gray': '#F5F5F5',
        'dark-gray': '#333',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

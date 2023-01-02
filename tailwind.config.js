/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        primary: '#FF6363',
        secondary: {
          100: '#E2E2D5',
          200: '#888883',
        },
      },
      fontFamily: {
        // src/styles에서 font의 family가 Nunito여서 grap 가능
        body: ['Nunito'],
      },
    },
  },
  plugins: [],
};

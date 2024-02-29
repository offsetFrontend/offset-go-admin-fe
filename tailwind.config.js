/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        spaceGrotesk: ['Space Grotesk', 'sans-serif']
      },
      colors: {
        blue: {
          100: '#4361EE0D',
          200: '#4361ee1a',
          800: '#4361EE',
          300: 'rgba(67, 97, 238, 0.25)',
          400: 'rgba(67, 97, 238, 0.1)'
        },
        amber: {
          600: '#C17526'
        },
        violet: '#605BFF',
        gold: '#F4AB27',
        silver: '#797783',
        bronze: '#C17627',
        red: {
          100: 'rgba(201, 2, 2, 0.15)',
          300: '#C90202'
        },
        grey: {
          50: '#465257',
          100: '#F4F6FA',
          200: '#E8E8E8',
          300: '#E1E1E1',
          500: '#878787',
          700: 'rgba(128,128,128,1)',
          800: 'rgba(128,128,128,0.5)'
        }
      }
    }
  },
  plugins: []
}

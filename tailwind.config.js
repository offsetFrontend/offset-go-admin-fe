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
          300: 'rgba(67, 97, 238, 0.25)',
          400: 'rgba(67, 97, 238, 0.1)',
          600: 'rgba(67, 97, 238, 0.2)',
          800: '#4361EE'
        },
        green: {
          400: '#3BB800'
        },
        red: {
          200: 'rgba(201, 2, 2, 0.2)',
          400: '#C90202'
        },
        gray: {
          50: '#465257',
          100: '#F4F6FA',
          200: '#E8E8E8',
          300: '#E1E1E1',
          500: '#878787',
          800: 'rgba(128,128,128,0.5)'
          900:"rgba(128, 128, 128, 1)"
        }
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(to right, #FFE36D, #F4AA26)',
        'silver-gradient': 'linear-gradient(to right, #A1A0A5, #797783)',
        'bronze-gradient': 'linear-gradient(to right, #F2B575, #C17526)'
      }
    }
  },
  plugins: []
}

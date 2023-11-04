/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
    variants: {
      extend: {
        backgroundColor: ['hover'],
      },
    },
    violet: {
      '100': '#f3e7ff',
      '200': '#c77dff',
      '300': '#9a4cff',
      '400': '#7c2cc8',
      '500': '#6512cc',
      '600': '#5809a7',
      '700': '#48088f',
      '800': '#37076b',
      '900': '#240754',
    },
  },
}



/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          green: '#495E57',
          yellow: '#F4CE14',
          zzz: '#333333',
        },
        secondary: {
          pink: '#EE9972',
          pale: '#FBDABB',
        },
        highlight: {
          lightGray: '#EDEFEE',
          darkGray: '#333333',
        },
      },
      fontSize: {
        'subtitle': '2.5rem', // 40px
        'medium': '1.125rem', // 18px
        'card-title': '1.125rem', // 18px
        'paragraph': '1rem', // 16px
        'highlight': '1rem', // 16px
      },
      lineHeight: {
        'default': '1.5',
      },
      borderRadius: {
        'default': '1rem',
      },
      fontFamily: {
        'markazi-medium': ['MarkaziText-medium', 'serif'],
        'karla-regular': ['Karla-Regular', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
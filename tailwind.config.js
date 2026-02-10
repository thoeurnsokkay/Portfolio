// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     './pages/**/*.{js,ts,jsx,tsx,mdx}',
//     './components/**/*.{js,ts,jsx,tsx,mdx}',
//     './app/**/*.{js,ts,jsx,tsx,mdx}',
//   ],
//   theme: {
//     extend: {
//       colors: {
//         primary: {
//           DEFAULT: '#06b6d4',
//           light: '#22d3ee',
//           dark: '#0891b2',
//         },
//         secondary: {
//           DEFAULT: '#8b5cf6',
//           light: '#a78bfa',
//           dark: '#7c3aed',
//         },
//       },
//       animation: {
//         'float': 'float 8s ease-in-out infinite',
//         'twinkle': 'twinkle 3s infinite',
//         'pulse-slow': 'pulse 3s ease-in-out infinite',
//         'infinite-scroll': 'infinite-scroll 40s linear infinite',
//         'up-down': 'up-down 2s ease-in-out infinite',
//       },
//       keyframes: {
//         'infinite-scroll': {
//           from: { transform: 'translateX(0)' },
//           to: { transform: 'translateX(-50%)' },
//         },
//         'up-down': {
//           '0%, 100%': { transform: 'translateY(0)' },
//           '50%': { transform: 'translateY(-5px)' }, // ឡើងលើ 5px
//         }
//       }
//     },
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#06b6d4',
          light: '#22d3ee',
          dark: '#0891b2',
        },
        secondary: {
          DEFAULT: '#8b5cf6',
          light: '#a78bfa',
          dark: '#7c3aed',
        },
      },
      animation: {
        'float': 'float 8s ease-in-out infinite',
        'twinkle': 'twinkle 3s infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'infinite-scroll': 'infinite-scroll 40s linear infinite',
        'up-down': 'up-down 3s ease-in-out infinite',
        'rotate-slow': 'rotate-slow 60s linear infinite', // បន្ថែមថ្មីសម្រាប់ Orbit
        'reverse-spin': 'reverse-spin 60s linear infinite', // បន្ថែមថ្មីសម្រាប់ Card
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        'up-down': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }, 
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'twinkle': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.3 },
        },
        'rotate-slow': {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(360deg)' },
        },
        'reverse-spin': {
          'from': { transform: 'rotate(360deg)' },
          'to': { transform: 'rotate(0deg)' },
        }
      }
    },
  },
  plugins: [],
}
/* eslint-disable functional/no-expression-statement */
const { nextui } = require('@nextui-org/react');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        'max-sm': { max: '639px' },
        'max-md': { max: '767px' },
        'max-lg': { max: '1023px' },
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        base: '2px 4px 12px #00000014',
        hover: '2px 4px 16px #00000029',
      },
      animation: {
        preloaderPulse: 'preloadPulse 2s linear infinite',
        appear: 'appear linear',
      },
      maxWidth: {
        '8xl': '1440px',
      },
      transitionProperty: {
        'transform-shadow': 'transform, box-shadow',
      },
      keyframes: {
        preloadPulse: {
          '0%': { opacity: '0.09' },
          '50%': { opacity: '0.14' },
          '100%': { opacity: '0.09' },
        },
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  darkMode: 'class',
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: '#f5f5f7',
            foreground: '#11181C',
            divider: 'rgba(17, 17, 17, 0.1)',
            focus: 'transparent',
            default: {
              DEFAULT: '#ffffff',
              foreground: '#000000',
            },
            primary: {
              DEFAULT: '#5796EC',
              foreground: '#ffffff',
            },
            secondary: {
              DEFAULT: '#11181C',
              foreground: '#ffffff',
            },
            danger: {
              DEFAULT: '#ED2939',
              foreground: '#ffffff',
            },
            success: {
              DEFAULT: 'rgb(58, 171, 64)',
              foreground: '#ffffff',
            },
          },
        },
        dark: {
          colors: {
            background: '#000000',
            foreground: '#ECEDEE',
            focus: 'transparent',
            divider: 'rgba(255, 255, 255, 0.1)',
            default: {
              DEFAULT: 'rgb(39, 39, 42)',
              foreground: '#ffffff',
            },
            primary: {
              DEFAULT: '#5796EC',
              foreground: '#ffffff',
            },
            secondary: {
              DEFAULT: 'white',
              foreground: '#000000',
            },
            danger: {
              500: '#ED2939',
              DEFAULT: '#ED2939',
              foreground: 'white',
            },
            success: {
              DEFAULT: 'rgb(58, 171, 64)',
              foreground: 'white',
            },
          },
        },
      },
    }),
  ],
};

import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // tailwind.config.ts - just swap these hex values
        // navy: {
        //   DEFAULT: '#D9822B',   // Muted saffron
        //   dark: '#A65C1A',      // Deep saffron-brown
        //   light: '#E6A65C',     // Soft saffron highlight
        // },
        // gold: {
        //   DEFAULT: '#2E5E2C',   // Deep BJP-style green
        //   dark: '#1F3F1E',      // Forest green
        //   light: '#4C8C4A',     // Muted green accent
        // },
        // cream: '#F6F1E6',       // Warm off-white (less bright than pure white)
        // divider: '#D9CBB8',     // Soft earthy divider


        navy: {
          DEFAULT: '#1B3A6B',
          dark: '#0f2040',
          light: '#2a4a7a',
        },
        gold: {
          DEFAULT: '#C8851C',
          dark: '#A66E10',
          light: '#E09A2A',
        },
        cream: '#F7F4EF',
        divider: '#E2D9CC',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-lora)', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}

export default config

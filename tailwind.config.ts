import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        agrandir: ['agrandir', 'sans-serif'],
      },
      colors: {
        gold: '#fcf0de',
      },
      screens: {
        nano: '336px',
      },
      gridTemplateAreas: {
        'nano-layout': ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
        'sm-layout': ['A B', 'E D', 'F D', 'C C', 'G H', 'G H'],
        'md-layout': ['A B B', 'C C D', 'E F D', 'G G H', 'G G H'],
        'lg-layout': [],
      },
      gridTemplateColumns: {
        'nano-layout': 'repeat(1, minmax(0, 36.25rem))',
        'sm-layout': 'repeat(2, minmax(0, 30.75rem))',
        'md-layout': 'repeat(3, minmax(0, 26.875rem))',
        'lg-layout': '',
      },
      gridTemplateRows: {
        'nano-layout': '',
        'sm-layout': '',
        'md-layout': '',
        'lg-layout': '',
        'xl-layout': 'repeat(4, minmax(203px, auto))',
      },
    },
  },
  plugins: [require('@savvywombat/tailwindcss-grid-areas')],
}
export default config

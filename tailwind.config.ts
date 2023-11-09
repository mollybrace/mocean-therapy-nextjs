import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/about/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      "champagne-beige": "#002F37",
      "moonstone": "#EAF1F8",
      "dogwood": "#BBCBD2",
      "blue-morelli": "#4498A2"
    },
    extend: {
      fontFamily: {
        roboto: ['var(--font-roboto)']
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require("daisyui")],
}
export default config



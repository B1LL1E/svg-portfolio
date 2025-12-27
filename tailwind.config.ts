import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(-25%)' },
          '100%': { transform: 'translateX(25%)' },
        },
      },
      animation: {
        'slide-1': 'slide 3s ease-in-out infinite alternate',
        'slide-2': 'slide 4s ease-in-out infinite alternate-reverse',
        'slide-3': 'slide 5s ease-in-out infinite alternate'
      },
    },
  },
  plugins: [],
};
export default config;
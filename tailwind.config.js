/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.html",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '0.2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      screens: {
        'sm': '320px',
        // => @media (min-width: 320px) { ... }
      },
    },
    fontFamily: {
      'sans': [
        'Noto Sans',
        'sans-serif',
      ],
      display: ["Noto Sans", "sans-serif"],
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
}

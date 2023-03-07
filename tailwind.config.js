/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      padding: {
        "100/5": "20%",
        "100/7.5": "15%",
        "100/8": "12.5%",
        "100/10": "10%",
        "100/13.29": "7.51%",
        "100/20": "5%",
        "21": "5rem"
      },
      width: {
        "200": "800px",
      },
      minWidth: {
        "75": "300px"
      },
      minHeight: {
        "75": "300px"
      },
      lineHeight: {
        "x-loose": "3rem"
      },
      fontSize: {
        "h4": "max(30px,2.25rem)"
      }
    },
  },
  plugins: [],
}

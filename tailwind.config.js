/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        opensans: ["Open Sans", "sans-serif"],
        "body-grotesque-fit-bold-italic": [
          "'Body Grotesque Fit Bold Italic'",
          "sans-serif",
        ],
        "body-grotesque-large-italic": [
          "'Body Grotesque Large Italic'",
          "sans-serif",
        ],
        "body-text-italic": ["'Body Text Italic'", "sans-serif"],
        "body-text-slim-light": ["'Body Text Slim Light'", "sans-serif"],
      },
    },
  },
  plugins: [],
};

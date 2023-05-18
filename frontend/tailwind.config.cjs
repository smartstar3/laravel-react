const sizes = {};

for (let i = 0; i < 500; i++) {
  sizes[i] = `${i / 4}rem`;
  sizes[`${i}.5`] = `${(i + 0.5) / 4}rem`;
}

const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: ["./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      spacing: sizes,
      minHeight: sizes,
      minWidth: sizes,
      maxHeight: sizes,
      maxWidth: sizes,
      borderRadius: sizes,
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      fontSize: {
        xxs: ['10px', '16px'],
        xs: ['12px', '16px'],
        sm: ['14px', '18px'],
        lg: ['18px', '20px'],
      },
    },
  },
  plugins: [],
});

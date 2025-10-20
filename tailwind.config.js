const { platformSelect } = require('nativewind/theme');
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        'inter-semibold': ['Inter18pt-SemiBold'],
      },
    }

  },
};
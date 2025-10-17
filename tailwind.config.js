const { platformSelect } = require('nativewind/theme');

module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",     // Main App file
    "./src/**/*.{js,jsx,ts,tsx}", // Include all files inside src
    "./src/pages/**/*.{js,jsx,ts,tsx}", // Explicitly include pages folder
    "./src/components/**/*.{js,jsx,ts,tsx}", // If you have components folder
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
};

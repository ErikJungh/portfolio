/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./projects/**/*.{html,ts}", "../src/**/*"],

  darkMode: "class",

  theme: {
    extend: {
      colors: {
        // Define your colors here
        primaryDark: "#333",
        primaryLight: "#ffffffff", //light
        secondaryDark: "#ff1f71",
        secondaryLight: "#efdfbf", //light
        tertiaryLight: "#dfdfdf", //light
        primaryTextDark: "#ffffff",
        primaryTextLight: "#000000",
        secondaryTextDark: "#bcbcbc",
        secondaryTextLight: "#333333",
        primaryButtonBgLight: "#ff0000",
        primaryButtonBgDark: "#00ff00",
        primaryButtonTextLight: "#000000",
        primaryButtonTextDark: "#00ffff",
        primary: "#2d2d2d",
        secondary: "#ff1f71",
        tertiary: "#333333",
        primaryText: "#fefefe",
        secondaryText: "#bcbcbc",
      },
      borderRadius: {
        // Default border radius of 10px
        default: "4px",
        large: "8px",
      },
      boxShadow: {
        default:
          "0 0.25rem 0.25rem rgba(0, 0, 0, 0.2), 0 0 1rem rgba(0, 0, 0, 0.2)",
      },
    },
  },

  // Define custom utility classes within the @layer directive
  corePlugins: {
    preflight: false, // Disable preflight to define custom utilities
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".bg-primary-dark": { backgroundColor: "#333333" },
        ".bg-primary-light": { backgroundColor: "#FFFFFF" },
        ".text-primaryText-dark": { color: "#ffffff" },
        ".text-primaryText-light": { color: "#000000" },
        ".bg-primaryButtonBg-dark": { backgroundColor: "#ff0000" },
        ".bg-primaryButtonBg-light": { backgroundColor: "#00ff00" },
        ".color-primaryButtonText-dark": { color: "#000000" },
        ".color-primaryButtonText-light": { color: "#00ffff" },
      };
      addUtilities(newUtilities, ["responsive", "dark"]);
    },
  ],
};

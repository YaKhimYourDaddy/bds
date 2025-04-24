// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E03C31",
        secondary: "#2C2C2C",
        tertiary: "#F7F8F9",
        "text-primary": "#333333",
        "text-secondary": "#777777",
        "text-light": "#FFFFFF",
        "border-color": "#E4E8EF",
        success: "#3ABE41",
        info: "#217AC0",
        warning: "#FFC107",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 4px rgba(0, 0, 0, 0.15)",
        dropdown: "0 2px 10px rgba(0, 0, 0, 0.1)",
      },
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
      },
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};

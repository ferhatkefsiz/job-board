const config = {
  darkMode: ["class"],
  content: ["./app/**/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./modules/**/*.{ts,tsx}"],
  theme: {
    extend: {
      container: {
        screens: {
          lg: "768px",
          xl: "768px",
          "2xl": "768px"
        },
        center: true,
        padding: {
          DEFAULT: "0.75rem"
        }
      }
    }
  },
  plugins: []
}

export default config

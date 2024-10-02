import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./modules/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "var(--font-geist-sans)",
        mono: "var(--font-geist-mono)"
      },
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

import type { Config } from "tailwindcss"
import { rounded, shade, components, animations, palettes, grays } from "@tailus/themer-plugins"

const config: Config = {
  content: [
    "./app/**/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./modules/**/*.{ts,tsx}",
    "./node_modules/@tailus/themer/dist/components/**/*.{js,ts}"
  ],
  darkMode: ["selector"],
  theme: {
    extend: {
      colors: () => ({
        ...palettes.trust
      }),
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
  plugins: [rounded, shade, components, animations, require("tailwindcss-animate")]
}

export default config

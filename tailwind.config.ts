import type { Config } from "tailwindcss"
import defaultTheme from "tailwindcss/defaultTheme"

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "primary-color": "var(--primary-color)",
        "app-bg": "var(--app-bg)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
} satisfies Config

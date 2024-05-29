import type { Config } from "tailwindcss"

const config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./src/assets/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/components/(card|ripple).js"
  ],
  prefix: '',
  theme: {
    extend: {
      colors: {
        number:
        "font-bold font-outline-2 text-amber-500"
      },
      dropShadow: {
        glow: [
          "0 0px 20px rgba(255,255, 255, 0.45)",
          "0 0px 65px rgba(255, 255,255, 0.4)"
        ]
      },
      caretColor: theme => ({
        transparent: 'transparent',
      })
    },
  },
} satisfies Config

export default config
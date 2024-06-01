import type { Config } from "tailwindcss"

const {nextui} = require('@nextui-org/react')

const config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./context/**/*.{ts,tsx}",
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
  plugins: [
    nextui({
      themes: {
        "orange": {
                extend: 'light',
                colors: {
                  background: "#ea580c",
                  primary: '#e4e4e7',
                }
              },
          }
        })
  ],
} satisfies Config

export default config
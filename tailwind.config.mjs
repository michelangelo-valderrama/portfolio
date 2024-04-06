import defaultTheme from "tailwindcss/defaultTheme"

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        muted: {
          foreground: "hsl(var(--muted))",
        },
        accent: {
          foreground: "hsl(var(--accent-foreground))",
        },
      },
      fontFamily: {
        sans: ["Eudoxus Sans", ...defaultTheme.fontFamily.sans],
        mono: ["Modern Era Mono", ...defaultTheme.fontFamily.mono],
        serif: ["Nevrada Neue", ...defaultTheme.fontFamily.serif],
        impact: ["Roboto Flex", ...defaultTheme.fontFamily.sans],
      },
      screens: {
        xs: "400px",
      },
      fontSize: {
        "2xs": "0.625rem",
      },
    },
  },
  plugins: [],
}

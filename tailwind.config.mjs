/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        border: "hsl(var(--border))",
        muted: {
          foreground: "hsl(var(--muted))",
        },
        accent: {
          foreground: "hsl(var(--accent-foreground))",
        },
      },
    },
  },
  plugins: [],
}

import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        buttonBlue: "var(--buttonBlue)",
        textPurple: "var(--textPurple)",
        textBlue: "var(--textBlue)",
        secondary: "var(--secondary)"
      },
    },
  },
  plugins: [],
} satisfies Config;

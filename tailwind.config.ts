import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1a6d6c",
        dark: "#2a2a2a",
        background: "#ffffff",
      },
      fontFamily: {
        sans: ['Proxima Nova', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        proxima: ['Proxima Nova', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        garamond: ['Adobe Garamond Pro', 'Georgia', 'Times New Roman', 'serif'],
      },
    },
  },
  plugins: [],
};

export default config;

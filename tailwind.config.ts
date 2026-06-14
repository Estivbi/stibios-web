import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        red: { brand: "#E8001D", dark: "#B5001A" },
        asphalt: { DEFAULT: "#0E0E10", mid: "#1A1A1E", light: "#26262C" },
        line: "#2E2E36", muted: "#7A7A8A", gold: "#C9A84C",
        green: { brand: "#1DB954" },
      },
      fontFamily: {
        barlow: ["'Barlow Condensed'", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;

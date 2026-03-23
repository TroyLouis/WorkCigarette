import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      colors: {
        cigarette: "#E08E45",
        ashed: "#1C1C1C",
        ink: "#1A1A1A",
        white: "#FFFFFF",
        poppi: {
          pink: "#FF6B9D",
          yellow: "#FFE066",
          coral: "#FF8C7A",
          mint: "#7FDBDA",
          cream: "#FFF5E6",
        },
      },
    },
  },
  plugins: [],
};

export default config;

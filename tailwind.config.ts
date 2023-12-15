import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        input: "0px 0px 32px 0px rgba(99, 60, 255, 0.25);",
      },
      colors: {
        border: "#D9D9D9",
        "dark-gray": "#333",
        gray: "#737373",
        "light-gray": "#FAFAFA",
        purple: "#633CFF",
        "purple-hover": "#BEADFF",
      },
    },
  },
  plugins: [],
};
export default config;

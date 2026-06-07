import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        akred: "#e50914",
        akdark: "#050505",
        akgray: "#111111",
      },
    },
  },
  plugins: [],
};

export default config;

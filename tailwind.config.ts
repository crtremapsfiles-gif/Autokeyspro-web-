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
      boxShadow: {
        ak: "0 0 0 1px rgba(255,255,255,.08), 0 20px 60px rgba(0,0,0,.45)",
      }
    },
  },
  plugins: [],
};

export default config;

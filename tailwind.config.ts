import type { Config } from "tailwindcss";
const config: Config = { content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"], theme: { extend: { colors: { akred: "#e30613", akdark: "#050505", akpanel: "#101010" } } }, plugins: [] };
export default config;

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkPurple: "#0A002D",
        purple: "#41196F",
        lightPurple: "#8172E9",
        cream: "#FAF2E1",
        lightPink: "#FFCFCF",
      },
    },
  },
  plugins: [],
};

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
        warmBeige: "#C3AB87", // Warm Beige-Tan
        softCream: "#ECE3D2", // Soft Cream
        mutedGreen: "#8FB399", // Muted Green
        terracottaRed: "#D97A5D", // Terracotta Red
        goldenYellow: "#F4C95D", // Golden Yellow
        darkChocolate: "#4E342E", // Dark Chocolate Brown
        softSage: "#B7C7A8", // Soft Sage
        charcoalGray: "#4A4A4A", // Charcoal Gray
      },
      fontFamily: {
        script: ["Dancing Script", "cursive"], // Dancing Script for decorative text
        body: ["Lato", "sans-serif"], // Lato for body text
      },
    },
  },
  plugins: [],
};

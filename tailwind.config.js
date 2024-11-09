/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#16a34a",    // Green-600 for primary actions
          "primary-content": "#ffffff",
          
          "secondary": "#22c55e",  // Green-500 for secondary elements
          "secondary-content": "#ffffff",
          
          "accent": "#4ade80",     // Green-400 for accents
          "accent-content": "#ffffff",
          
          "neutral": "#f3f4f6",    // Gray-100
          "neutral-content": "#1f2937", // Gray-800
          
          "base-100": "#ffffff",   // White background
          "base-200": "#f9fafb",   // Gray-50
          "base-300": "#f3f4f6",   // Gray-100
          "base-content": "#1f2937", // Gray-800 text
          
          "--rounded-box": "0.5rem",
          "--rounded-btn": "9999px",
          "--rounded-badge": "9999px",
          "--animation-btn": "0.25s",
          "--animation-input": "0.2s",
          "--btn-focus-scale": "0.95",
          "--border-btn": "1px",
          "--tab-border": "1px",
          "--tab-radius": "0.5rem",
        },
      },
    ],
  },
};
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        primaryMedium: "var(--primary-medium)",
        primaryLight: "var(--primary-light)",
        secondary: "var(--secondary)",
        tertiary: "var(--tertiary)",
        info: "var(--info)",
        success: "var(--success)",
        fail: "var(--fail)",
        
      },
    },
  },
  plugins: [],
}


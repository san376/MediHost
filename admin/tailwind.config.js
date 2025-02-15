/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // ✅ Ensure Tailwind scans your files
    theme: {
      extend: {
        colors: {
          primary: "#5F6FFF"
        }
      }
    },
    plugins: []
  }
  
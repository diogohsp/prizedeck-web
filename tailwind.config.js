/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "radial-primary": "radial-gradient(circle, #1a1a1a, black )",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        pattern: "12px",
      },
      colors: {
        primary: "#111212",
        secondary: "#1a1a1a",
        thertiary: "#2b5d22",
        quaternary: "#0e1f0b",
      },
      screens: {
        xs: "475px",
        sm: '675px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
        portrait: { raw: "(orientation: portrait)" },
        "dark-mode": { raw: "(prefers-color-scheme: dark)" },
      },
      // colors: {
      //   primary: "#111212",
      //   secondary: "#1a1a1a",
      //   thertiary: "#2b5d22",
      //   quaternary: "#0e1f0b",
      // },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};

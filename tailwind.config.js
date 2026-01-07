/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        responsive: "repeat(auto-fit, minmax(300px, 1fr))",
        "responsive-sm": "repeat(auto-fit, minmax(200px, 1fr))",
      },
      fontFamily: {
        Lato: '"Lato", sans-serif',
        Orbitron: '"Orbitron", sans-serif',
        Oxanium: '"Oxanium", sans-serif',
      },
      colors: {
        "accent-color": "hsl(47, 100%, 50%)", // The Yellow
        "primary-white": "hsl(0, 0%, 90%)",
        paragraph: "hsl(0, 0%, 70%)",
        "light-black": "hsl(0, 0%, 5%)", // Very dark grey
        "dark-yellow": "hsla(45, 100%, 50%, 0.8)",
        "dark-gray": "hsl(0, 0%, 28%)",
      },
      backgroundImage: {
        "home-mobile-hero": "url('/images/mobile/mobile-hero.png')",
        "home-desktop-hero": "url('/images/desktop/Hero-desktop.png')",
        "grid-pattern": "linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid-pattern": "40px 40px",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }, // Move half way (since we duplicate list)
        },
        shrink: {
          "0%": { width: "100%" },
          "100%": { width: "0%" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        marquee: "marquee 25s linear infinite",
        shrink: "shrink 5s linear forwards",
        shimmer: "shimmer 2s linear infinite",
        "fade-in-up": "fade-in-up 0.5s ease-out forwards",
      },
    },
  },
  plugins: [],
};
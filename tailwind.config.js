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
        "accent-color": "hsl(47, 100%, 50%)",
        "primary-white": "hsl(0, 0%, 90%)",
        paragraph: "hsl(0, 0%, 70%)",
        "light-black": "hsl(0, 0%, 5%)",
        "dark-yellow": "hsla(45, 100%, 50%, 0.8)",
        "dark-gray": "hsl(0, 0%, 28%)",
      },
      backgroundImage: {
        "home-mobile-hero": "url('/images/mobile/mobile-hero.png')",
        "home-desktop-hero": "url('/images/desktop/Hero-desktop.png')",
        "contact-desktop-hero": "url('/images/desktop/contact-hero.png')",
        "contact-mobile-hero": "url('/images/mobile/mobile-contact-hero.png')",
        "work-desktop-hero": "url('/images/desktop/works-desktop-hero.png')", // Corrected from contact-hero
        "work-mobile-hero": "url('/images/mobile/mobile-works-hero.png')",
      },
      width: {
        "9/20": "45%",
        98: "25rem",
        100: "30rem",
      },
      height: {
        46: "11.25rem",
        68: "16.875rem",
        58: "14.063rem",
        100: "25rem",
      },
      minWidth: {
        40: "10rem", // 160px
        50: "12.5rem", // 200px
        60: "15rem", // 240px
      },
      keyframes: {
        shrink: {
          "0%": { width: "100%" },
          "100%": { width: "0%" },
        },
      },
      animation: {
        shrink: "shrink 5s linear forwards",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Strict Luxury Emerald & Gold Palette
        pearl: "#FFFFFF",
        graphite: {
          DEFAULT: "#252B29",
          900: "#1A1F1D",
          800: "#252B29",
          700: "#323B38",
          600: "#444E4B",
          500: "#5D6B67",
        },
        emerald: {
          DEFAULT: "#087F5B",
          dark: "#055B41",
          deep: "#044230",
          light: "#0B9B70",
          glow: "rgba(8, 127, 91, 0.35)",
        },
        sage: {
          DEFAULT: "#E8F1EC",
          light: "#F0F6F3",
          border: "#D2E2D9",
        },
        gold: {
          DEFAULT: "#C6A66B",
          dark: "#A6894D",
          light: "#DFCA9C",
          glow: "rgba(198, 166, 107, 0.3)",
        },
        ivory: {
          DEFAULT: "#F5F3ED",
          warm: "#EDEAE1",
          light: "#FAF9F5",
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Manrope', 'system-ui', 'sans-serif'],
        heading: ['Sora', 'Plus Jakarta Sans', 'sans-serif'],
        display: ['Sora', 'Plus Jakarta Sans', 'sans-serif'],
        serif: ['Cinzel', 'Playfair Display', 'serif'],
      },
      boxShadow: {
        'luxury-card': '0 10px 30px -5px rgba(37, 43, 41, 0.06), 0 20px 40px -10px rgba(8, 127, 91, 0.05)',
        'luxury-hover': '0 20px 40px -10px rgba(37, 43, 41, 0.12), 0 0 30px rgba(198, 166, 107, 0.2)',
        'emerald-glow': '0 10px 30px rgba(8, 127, 91, 0.25)',
        'gold-glow': '0 10px 30px rgba(198, 166, 107, 0.25)',
        'dark-luxury': '0 20px 50px rgba(10, 15, 13, 0.6)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-up': 'slideUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'float-slow': 'floatSlow 6s ease-in-out infinite',
        'ken-burns': 'kenBurns 24s ease-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.94', transform: 'scale(1.02)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        kenBurns: {
          '0%': { transform: 'scale(1) translate(0, 0)' },
          '50%': { transform: 'scale(1.08) translate(-1%, -1%)' },
          '100%': { transform: 'scale(1.12) translate(1%, 0)' },
        },
      },
    },
  },
  plugins: [],
}

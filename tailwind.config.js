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
        // Exact ZisanTech Official Brand Identity Tokens
        navy: {
          950: "#040F2B", // Ultra deep navy
          900: "#071B49", // Primary Deep Navy Blue
          850: "#0B2663",
          800: "#063B83", // Corporate Blue
          700: "#0A4EAB",
          600: "#087FE5", // Electric Blue
          500: "#08B9E8", // Cyan
          100: "#E3F2FD",
          50: "#F3F7FC",  // Light Blue Grey
        },
        corporate: {
          navy: "#071B49",
          blue: "#063B83",
          electric: "#087FE5",
          cyan: "#08B9E8",
          surface: "#F3F7FC",
          charcoal: "#18243A",
          dark: "#040F2B",
          border: "rgba(8, 185, 232, 0.2)",
          borderSoft: "rgba(7, 27, 73, 0.1)",
        },
        charcoal: {
          DEFAULT: "#18243A",
          light: "#2A3B5A",
          muted: "#4A5D7E",
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Manrope', 'system-ui', 'sans-serif'],
        heading: ['Sora', 'Plus Jakarta Sans', 'sans-serif'],
        display: ['Sora', 'Plus Jakarta Sans', 'sans-serif'],
        mono: ['Space Grotesk', 'JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'brand-glow': '0 0 35px rgba(8, 185, 232, 0.3)',
        'electric-glow': '0 8px 30px rgba(8, 127, 229, 0.35)',
        'corporate-card': '0 10px 30px rgba(7, 27, 73, 0.08), 0 1px 3px rgba(0, 0, 0, 0.05)',
        'corporate-hover': '0 20px 45px rgba(7, 27, 73, 0.16), 0 0 30px rgba(8, 185, 232, 0.15)',
        'dark-card': '0 16px 40px rgba(4, 15, 43, 0.55)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'float-slow': 'floatSlow 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.92', transform: 'scale(1.02)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
}

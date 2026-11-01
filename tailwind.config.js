/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0A0A0A',
        surface: '#0F0F0F',
        frame: '#0E0E0E',
        line: '#232323',
        edge: '#2E2E2E',
        ink: '#F2F2F2',
        soft: '#B5B5B5',
        muted: '#8A8A8A',
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      screens: {
        rail: '1100px',
      },
      keyframes: {
        blink: { '50%': { opacity: '0' } },
      },
      animation: {
        blink: 'blink 1.6s steps(2) infinite',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#ffffff',
        secondary: '#64ffda',
        tertiary: '#e2e8f0',
        textPrimary: '#0f172a',
        textSecondary: '#1e293b',
        error: '#ff4d4d',
        success: '#4caf50',
      },
      spacing: {
        xs: '0.25rem',
        sm: '0.5rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '2rem',
      },
      borderRadius: {
        sm: '0.25rem',
        md: '0.2rem',
        lg: '0.5rem',
        full: '9999px',
      },
      transitionProperty: {
        'default': 'all 0.3s ease',
      },
    },
  },
  plugins: [],
} 
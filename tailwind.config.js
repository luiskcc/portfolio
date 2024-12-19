module.exports = {
  content: [
    './app/views/**/*.{erb,haml,html,slim}',
    './app/helpers/**/*.rb',
    './app/assets/stylesheets/**/*.css',
    './app/javascript/**/*.{js,jsx,ts,tsx}',
    './app/components/**/*.{erb,rb}'
  ],
  theme: {
    extend: {
      backdropBlur: {
        DEFAULT: '8px',
      },
      colors: {
        border: "#30363d",          // GitHub-style dark border
        background: "#0d1117",      // Dark background
        foreground: "#c9d1d9",      // Light text
        accent: {
          DEFAULT: "#58a6ff",       // GitHub blue
          foreground: "#ffffff",    // White text on accent
        },
      },
    },
  },
  plugins: [],
}
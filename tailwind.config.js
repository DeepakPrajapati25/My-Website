/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'ibmMono': ['"IBM Plex Mono"'],
      },
      textColor: {
        'color': {
          'base': 'var(--text-base)',
          'hover': 'var(--text-color-hover)',
          'rotating-plus': 'var(--rotating-plus)',
          'toggle-icon': 'var(--toggle-icon-color)',
        },
      },
      backgroundColor: {
        'base': 'var(--bg-app)',
        'nav': 'var(--bg-nav)',
        'nav-dropdown': 'var(--bg-nav-dropdown)',
        'toggle': 'var(--toggle-bg)',
        'nav-icon': 'var(--arrow-color)',
      },
      borderColor: {
        'nav-menu-item': 'var(--bg-nav)',
      }
    },
  },
  plugins: [],
}
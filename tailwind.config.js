/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
     "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // 'sans' is the default Tailwind font family
        // We set our custom font as the first choice
        'sans': ['Outfit Local', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        // You can also create a new utility class like 'font-outfit'
        'outfit': ['Outfit Local', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


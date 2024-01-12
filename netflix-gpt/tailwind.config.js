/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        first:
          "url('https://assets.nflxext.com/ffe/siteui/vlv3/c31c3123-3df7-4359-8b8c-475bd2d9925d/3aac2646-dd73-480d-b9b8-fbf55b24aff8/DE-en-20231225-popsignuptwoweeks-perspective_alpha_website_small.jpg')",
      },
    },
  },
  plugins: [],
}

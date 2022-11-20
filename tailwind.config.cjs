/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,svelte,html}"],
  theme: {
    extend: {},
  },
  plugins: [
	  require("@tailwindcss/typography"),
	  require("daisyui")
  ],
}

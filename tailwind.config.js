/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
	"./public/**/*.html",
	"./src/**/*.{html,js}",
  ],
  theme: {
	extend: {
		colors: {
			primary: '#FF6363',
			secondary: {
				100: '#E2E2D5',
				200: '#888883',
			}
		},
		fontFamily: {
			body: ['Schibsted Grotesk'],
			heading: ['Playfair Display'],
			course: ['Nunito'],
		}
	},
  },
  plugins: [],
}

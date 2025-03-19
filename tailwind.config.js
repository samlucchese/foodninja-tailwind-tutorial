/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
	"./public/**/*.html",
	"./src/**/*.{html,js}",
  ],
  theme: {
	extend: {
		fontSize: {
			mammoth: '100px',
		},
	},
  },
  plugins: [],
}

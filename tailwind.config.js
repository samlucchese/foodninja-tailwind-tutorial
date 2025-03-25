/** @type {import('tailwindcss').Config} */
module.exports = {
	
  content: [
	"./public/**/*.html",
	"./src/**/*.{html,js,css}",
  ],
  theme: {
	extend: {
		colors: {
			primary: '#FF6363',
			secondary: {
				100: 'rgb(226 226 213 / <alpha-value>)',  // 👈 this is key
				200: 'rgb(136 136 131 / <alpha-value>)',
			}
		},
		fontFamily: {
			body: ['Schibsted Grotesk'],
			heading: ['Playfair Display'],
			course: ['Nunito'],
		},
		fontSize: {
			mammoth: '100px',
		},
	},
  },
  plugins: [],
}

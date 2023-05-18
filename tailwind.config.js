/** @type {import("tailwindcss").Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,jsx}"],
	theme: {
		screens: {
			sm: "640px",
			md: "768px",
			"1md": "992px",
			lg: "1024px",
			xl: "1280px",
			"1xl": "1440px",
			"2xl": "1680px"
		},
		container: {
			center: true
		},
		extend: {
			colors: {
				"black-main": "#050C46",
				"black-second": " #25324B",
				"black-three": "#515B6F",
				"blue-main": "#2255EC",
				"blue-second": "#4475F2",
				"blue-three": "#416FF4",
				secondary: "#999999",
				"secondary-main": "rgba(5,12,70,0.5)",
				"secondary-second": "#F0F1F2",
				"secondary-three": "#afafaf",
				brand: {
					500: "#2255EC",
					600: "#26379B",
					700: "#071488",
					800: "#00095E",
					900: "#010B664D"
				},
				primary: {
					100: "#f5f5f7",
					200: "#EFF1F5"
				}
			}
		}
	},
	plugins: [require("@tailwindcss/line-clamp")]
};

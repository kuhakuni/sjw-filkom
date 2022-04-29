module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: ["Poppins"],
			colors: {
				primary: "#31336C",
				secondary: "#D49A47",
				tertiary: "#AC424D",
				quaternary: "#C97D87",
				dark: "#0f172a",
			},
			container: {
				center: true,
				padding: {
					DEFAULT: "1rem",
					sm: "1.5rem",
					md: "2rem",
					lg: "4rem",
				},
			},
		},
	},
	plugins: [],
};

module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			screens : {
				'xsm' : '460px',
				'xsm2' : '500px',
				'xsm3' : '550px',
			  },
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
			boxShadow: {
				layanan: "0px 12px 10px rgba(0, 0, 0, 0.25)",
			},
		},
	},
	mode: 'jit',
	plugins: [],
};

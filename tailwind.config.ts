/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#1A79FF",
				complementary: "#FF9F1A",
				bg: "#0C1829",
				light: "#142338",
				dark: "#0B1626",
				alert: "#FD4F4F",
				success: "#33A867",
				control: "#dddddd",
			},

			fontSize: {
				1: "48px",
				2: "40px",
				3: "32px",
				4: "24px",
				5: "20px",
				6: "18px",

				xlg: "20px",
				lg: "18px",
				md: "16px",
				sm: "14px",
				xsm: "12px",
			},
		},
	},
	plugins: [],
};

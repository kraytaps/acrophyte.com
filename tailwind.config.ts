import type { Config } from "tailwindcss";
import fluid, { extract, fontSize } from "fluid-tailwind";

const config: Config = {
	content: {
		files: [
			"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
			"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
			"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		],
		extract,
	},
	theme: {
		screens: {
			xs: "18.75rem", // 300px
			sm: "30rem", // 480px
			md: "48rem", // 768px
			lg: "61rem", // 976px
			xl: "90rem", // 1440px
			"2xl": "120rem", //1920px
		},
		fontSize,
		fontFamily: {
			avenir: ["var(--font-avenir)"],
		},
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
				"grey-0": "#C8C8C8",
				"grey-1": "#6C6C6C",
				"grey-2": "#494949",
				"white-0": "#FAFAFA",
				"white-1": "#E7E7E7",
			},
		},
	},
	plugins: [fluid],
};
export default config;

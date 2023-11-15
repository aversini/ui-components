/** @type {import('tailwindcss').Config} */

import colors from "tailwindcss/colors";

import { dynamicTwClasses } from "./lib/twPlugin";

/**
 * This function generates all the dynamic margins that are
 * potentially used with the "spacing" prop.
 * This is needed because tailwindcss doesn't support dynamic
 * margins out of the box -> if a mergin is not specifically
 * used, it will not be included in the final css file. This function,
 * used in conjunction with the safelist below, ensures that all
 * dynamic margins are included in the final css file.
 */
const generateDynamicMargins = () => {
	const allowed = [
		0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 20, 24, 28, 32, 36, 44,
		48, 52, 56, 60, 64, 72, 80, 96,
	];
	const margins = [];
	allowed.forEach((num) => {
		margins.push(`mr-${num}`);
		margins.push(`ml-${num}`);
	});
	return margins;
};

console.log("==> ", dynamicTwClasses("accent", 40));

export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	safelist: generateDynamicMargins(),
	plugins: [],
	theme: {
		extend: {
			colors: {
				accent: dynamicTwClasses("accent", 40),
				danger: colors.red,
				success: colors.green,
			},
		},
	},
};

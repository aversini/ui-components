/* eslint-disable no-undef */

module.exports = {
	reportOutput: ["github"],
	baseDir: "./packages/bundlesize/dist",
	defaultCompression: "gzip",
	files: [
		{
			path: "index.html",
			maxSize: "2kb",
		},
		{
			path: "assets/index.js",
			maxSize: "12kb",
		},
		{
			path: "assets/style.css",
			maxSize: "5kb",
		},
		{
			path: "assets/**/*.{png,svg}",
		},
	],
};

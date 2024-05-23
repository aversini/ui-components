import { defineConfig } from "tsup";

export default defineConfig({
	format: "esm",
	entry: ["src/typography/index.ts"],
	dts: {
		only: true,
	},
});

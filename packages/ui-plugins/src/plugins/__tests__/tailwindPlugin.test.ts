import { describe, expect, it } from "vitest";

import { tailwindContentPath } from "../tailwindcss/tailwindPlugin";

describe("Non-DOM tests", () => {
	it("should return an array with ui-system and ui-components", () => {
		expect(tailwindContentPath[0]).toContain("node_modules/@versini/ui-system");
		expect(tailwindContentPath[1]).toContain(
			"node_modules/@versini/ui-components",
		);
	});
});

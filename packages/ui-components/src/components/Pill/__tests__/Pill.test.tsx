import { render, screen } from "@testing-library/react";

import { expectToHaveClasses } from "../../../../../../configuration/tests-helpers";
import { PILL_CLASSNAME } from "../../../common/constants";
import { Pill } from "../..";

describe("Pill (exceptions)", () => {
	it("should be able to require/import from root", () => {
		expect(Pill).toBeDefined();
	});
});

describe("Pill modifiers", () => {
	it("should render a default pill", async () => {
		render(<Pill label="hello" />);
		const pill = await screen.findByRole("text");
		expectToHaveClasses(pill, [
			PILL_CLASSNAME,
			"px-2",
			"py-0.5",
			"text-xs",
			"bg-surface-information",
			"text-copy-information",
			"border-border-information",
		]);
	});

	it("should render a pill with variant warning", async () => {
		render(<Pill label="hello" variant="warning" />);
		const pill = await screen.findByRole("text");
		expectToHaveClasses(pill, [
			PILL_CLASSNAME,
			"px-2",
			"py-0.5",
			"text-xs",
			"bg-surface-warning",
			"text-copy-warning",
			"border-border-warning",
		]);
	});

	it("should render a pill with variant success", async () => {
		render(<Pill label="hello" variant="success" />);
		const pill = await screen.findByRole("text");
		expectToHaveClasses(pill, [
			PILL_CLASSNAME,
			"px-2",
			"py-0.5",
			"text-xs",
			"bg-surface-success",
			"text-copy-success",
			"border-border-success",
		]);
	});

	it("should render a pill with variant error", async () => {
		render(<Pill label="hello" variant="error" />);
		const pill = await screen.findByRole("text");
		expectToHaveClasses(pill, [
			PILL_CLASSNAME,
			"px-2",
			"py-0.5",
			"text-xs",
			"bg-surface-error",
			"text-copy-error",
			"border-border-error",
		]);
	});

	it("should render a pill with a custom class", async () => {
		render(<Pill label="hello" className="custom-class" />);
		const pill = await screen.findByRole("text");
		expectToHaveClasses(pill, [PILL_CLASSNAME, "custom-class"]);
	});

	it("should render a pill with a description", async () => {
		render(<Pill label="hello" description="this is a description" />);
		await screen.findByRole("text");
		const description = await screen.findByText("this is a description");
		expect(description.className).toContain("sr-only");
	});
});

import { render, screen } from "@testing-library/react";

import { ButtonIcon, IconSettings } from "../..";

describe("ButtonIcon (exceptions)", () => {
	it("should be able to require/import from root", () => {
		expect(ButtonIcon).toBeDefined();
	});
});

describe("ButtonIcon modifiers", () => {
	it("should render a default button", async () => {
		render(
			<ButtonIcon>
				<IconSettings />
			</ButtonIcon>,
		);
		const button = await screen.findByRole("button");
		expect(button.className).toContain("p-2");
	});

	it("should render a dark button", async () => {
		render(
			<ButtonIcon kind="dark">
				<IconSettings />
			</ButtonIcon>,
		);
		const button = await screen.findByRole("button");
		const buttonClass = button.className;
		expect(buttonClass).toContain("text-copy-light");
		expect(buttonClass).toContain("bg-action-primary");
	});

	it("should render a light button", async () => {
		render(
			<ButtonIcon kind="light">
				<IconSettings />
			</ButtonIcon>,
		);
		const button = await screen.findByRole("button");
		const buttonClass = button.className;
		expect(buttonClass).toContain("text-copy-light");
		expect(buttonClass).toContain("bg-action-secondary");
	});

	it("should render a disabled dark button", async () => {
		render(
			<ButtonIcon kind="dark" disabled>
				<IconSettings />
			</ButtonIcon>,
		);
		const button = await screen.findByRole("button");
		const buttonClass = button.className;
		expect(buttonClass).toContain("disabled:opacity-50");
		expect(buttonClass).toContain("disabled:cursor-not-allowed");
	});

	it("should render a disabled light button", async () => {
		render(
			<ButtonIcon kind="light" disabled>
				<IconSettings />
			</ButtonIcon>,
		);
		const button = await screen.findByRole("button");
		const buttonClass = button.className;
		expect(buttonClass).toContain("disabled:opacity-50");
		expect(buttonClass).toContain("disabled:cursor-not-allowed");
	});

	it("should render a fullWidth button", async () => {
		render(
			<ButtonIcon fullWidth>
				<IconSettings />
			</ButtonIcon>,
		);
		const button = await screen.findByRole("button");
		expect(button.className).toContain("w-full");
	});
});

/* eslint-disable @typescript-eslint/ban-ts-comment */

import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { expectToHaveClasses } from "../../../common/__tests__/helpers";
import { TEXT_INPUT_CLASSNAME } from "../../../common/constants";
import { TextInput } from "../..";

describe("TextInput (exceptions)", () => {
	it("should be able to require/import from root", () => {
		expect(TextInput).toBeDefined();
	});
});

describe("TextInput modifiers", () => {
	it("should render a dark or light (system) text input", async () => {
		render(<TextInput label="hello world" name="toto" />);
		const label = await screen.findAllByText("hello world");
		const input = await screen.findByRole("textbox");

		expect(label[0].className).toContain("sr-only");
		expectToHaveClasses(label[1], [
			"absolute",
			"cursor-text",
			"dark:text-copy-lighter",
			"font-medium",
			"text-copy-dark",
		]);
		expectToHaveClasses(input, [
			TEXT_INPUT_CLASSNAME,
			"bg-surface-lighter",
			"border-2",
			"border-border-dark",
			"caret-copy-dark",
			"dark:bg-surface-darker",
			"dark:caret-copy-light",
			"dark:focus:outline-focus-light",
			"dark:text-copy-lighter",
			"focus:outline-2",
			"focus:outline-focus-dark",
			"focus:outline-offset-2",
			"focus:outline",
			"h-12",
			"px-4",
			"rounded-md",
			"text-base",
			"text-copy-dark",
		]);
	});

	it("should render a light text input", async () => {
		render(<TextInput mode="light" label="hello world" name="toto" />);
		const label = await screen.findAllByText("hello world");
		const input = await screen.findByRole("textbox");
		screen.debug(input);
		expect(label[0].className).toContain("sr-only");
		expectToHaveClasses(label[1], [
			"absolute",
			"cursor-text",
			"font-medium",
			"text-copy-dark",
		]);
		expectToHaveClasses(input, [
			TEXT_INPUT_CLASSNAME,
			"bg-surface-lighter",
			"border-2",
			"border-border-dark",
			"caret-copy-dark",
			"focus:outline-2",
			"focus:outline-focus-dark",
			"focus:outline-offset-2",
			"focus:outline",
			"h-12",
			"px-4",
			"rounded-md",
			"text-base",
			"text-copy-dark",
		]);
	});

	it("should render a dark text input", async () => {
		render(<TextInput mode="dark" label="hello world" name="toto" />);
		const label = await screen.findAllByText("hello world");
		const input = await screen.findByRole("textbox");
		screen.debug(input);
		expect(label[0].className).toContain("sr-only");
		expectToHaveClasses(label[1], [
			"absolute",
			"cursor-text",
			"font-medium",
			"text-copy-lighter",
		]);
		expectToHaveClasses(input, [
			TEXT_INPUT_CLASSNAME,
			"bg-surface-darker",
			"border-2",
			"border-border-dark",
			"caret-copy-light",
			"dark:focus:outline-focus-light",
			"focus:outline-2",
			"focus:outline-focus-dark",
			"focus:outline-offset-2",
			"focus:outline",
			"h-12",
			"px-4",
			"rounded-md",
			"text-base",
			"text-copy-lighter",
		]);
	});

	it("should render a text input with an error message", async () => {
		render(
			<TextInput
				error
				helperText="error message"
				label="hello world"
				name="toto"
			/>,
		);
		const errorMessage = await screen.findByText("error message");
		expect(errorMessage.className).toContain("text-copy-error-light");
	});

	it("should render a text input with no borders", async () => {
		render(
			<TextInput label="toto" name="toto" noBorder data-testid="txtnpt-1" />,
		);
		const input = await screen.findByTestId("txtnpt-1");
		expect(input.className).toContain("border-transparent");
	});

	it("should render a raw text input with no styling", async () => {
		render(<TextInput label="toto" name="toto" raw data-testid="txtnpt-1" />);
		const input = await screen.findByTestId("txtnpt-1");
		expect(input.className).toBe("");
	});

	it("should render a text input with a wrapper class", async () => {
		render(
			<TextInput
				label="toto"
				name="toto"
				className="toto"
				data-testid="txtnpt-1"
			/>,
		);
		const input = await screen.findByTestId("txtnpt-1");
		expect(input.className).not.toContain("toto");
		if (input.parentElement) {
			expectToHaveClasses(input.parentElement, [
				"toto",
				"w-full",
				"justify-center",
			]);
		}
	});

	it("should render a text input with an input class", async () => {
		render(
			<TextInput
				label="toto"
				name="toto"
				inputClassName="toto"
				data-testid="txtnpt-1"
			/>,
		);
		const input = await screen.findByTestId("txtnpt-1");
		expect(input.className).toContain("toto");
		expect(input.parentElement?.className).not.toContain("toto");
	});

	it("should render a text input with a right element", async () => {
		render(
			<TextInput
				label="toto"
				name="toto"
				rightElement={<div>right element</div>}
				data-testid="txtnpt-1"
			/>,
		);
		await screen.findByText("right element");
	});
});

describe("TextInput methods", () => {
	afterEach(() => {
		vi.restoreAllMocks();
	});

	it("should honor the onChange prop", async () => {
		const events = {
			onChange: () => {},
		};
		const spyOnChange = vi.spyOn(events, "onChange");
		const user = userEvent.setup();
		render(
			<TextInput
				// @ts-ignore
				onChange={spyOnChange}
				label="hello world"
				name="toto"
				data-testid="txtnpt-1"
			/>,
		);
		const input = await screen.findByTestId("txtnpt-1");
		await user.type(input, "aa");

		expect(spyOnChange).toHaveBeenCalledTimes(2);
	});
});

describe("TextInput accessibility", () => {
	it("should render a text input with an error message", async () => {
		render(
			<TextInput
				error
				helperText="error message"
				label="hello world"
				name="toto"
			/>,
		);
		const errorMessage = await screen.findByText("error message");
		expect(errorMessage.className).toContain("text-copy-error-light");

		const input = await screen.findByLabelText("hello world");
		expect(input.getAttribute("aria-invalid")).toBe("true");
		expect(input.getAttribute("aria-describedby")).toContain("av-text-input-");
		expect(input.getAttribute("aria-describedby")).toContain("-helper");
	});

	it("should render a text input with a live region update", () => {
		vi.useFakeTimers();
		const clearTimeout = 500;

		render(
			<TextInput
				error
				helperText="error message"
				label="hello world"
				name="toto"
			/>,
		);
		const liveRegion = screen.getByText("toto error, error message");
		expect(liveRegion.getAttribute("aria-live")).toBe("polite");
		expect(liveRegion.textContent).toBe("toto error, error message");
		act(() => {
			vi.advanceTimersByTime(clearTimeout);
		});
		expect(liveRegion.textContent).toBe("");
	});
});

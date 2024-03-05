import type { SpacingProps } from "@versini/ui-private/dist/utilities";

export type SpinnerProps = {
	/**
	 * The mode of spinner to render. This will change the color of the spinner.
	 */
	mode?: "dark" | "light" | "system" | "alt-system";
	/**
	 * A ref to the spinner element.
	 */
	spinnerRef?: React.RefObject<HTMLDivElement>;
	/**
	 * The type of spinner to render. This will change the layout of the spinner.
	 */
	type?: "circle" | "dots";
} & SpacingProps;

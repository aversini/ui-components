import type { SpacingProps } from "@versini/ui-private/dist/utilities";

export type CardProps = {
	/**
	 * The children to render.
	 */
	children: React.ReactNode;
	/**
	 * If the header prop is not provided, the Card must be
	 * described via aria-labelledby.
	 */
	"aria-labelledby"?: string;
	/**
	 * CSS class(es) to add to the body.
	 */
	bodyClassName?: string;
	/**
	 * CSS class(es) to add to the main component wrapper.
	 */
	className?: string;
	/**
	 * If true, the card will be smaller.
	 */
	compact?: boolean;
	/**
	 * The content to render in the footer.
	 */
	footer?: React.ReactNode;
	/**
	 * CSS class(es) to add to the footer.
	 */
	footerClassName?: string;
	/**
	 * The content to render in the header.
	 */
	header?: React.ReactNode;
	/**
	 * CSS class(es) to add to the header.
	 */
	headerClassName?: string;
	/**
	 * The mode of Card. This will change the color of the Card.
	 */
	mode?: "darker" | "dark" | "light" | "system" | "alt-system";
	/**
	 * Whether or not to render the Card with a border.
	 * @default false
	 */
	noBorder?: boolean;
} & SpacingProps;

export type CardHeaderProps = {
	className: string;
	content: React.ReactNode;

	id?: string;
	userAriaLabelledby?: string;
};

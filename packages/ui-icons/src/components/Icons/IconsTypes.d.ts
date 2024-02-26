import { SpacingProps } from "@versini/ui-private/dist/utilities";

export interface IconsProps
	extends Omit<React.SVGAttributes<SVGElement>, "spacing">,
		SpacingProps {
	/**
	 * Whether or not to render the icon in a single color
	 * @default false
	 */
	monotone?: boolean;
	/**
	 * The title to use for the icon. Each icon has a default title,
	 * but it can be overridden with this prop.
	 */
	title?: string;
	/**
	 * Whether or not the icon is semantic (visual and
	 * announced to assistive technologies).
	 * @default false
	 */
	semantic?: boolean;
}

import type * as ToggleGroupRadix from "@radix-ui/react-toggle-group";
import type { SpacingProps } from "@versini/ui-private/dist/utilities";

export type Size = "small" | "medium" | "large";
export type Mode = "dark" | "light" | "system" | "alt-system";

export type ToggleGroupProps = {
	/**
	 * The type of focus for the buttons. This will change the color
	 * of the focus ring around the buttons.
	 */
	focusMode?: Mode;
	/**
	 * The mode of the group container. This will change the color of the background.
	 */
	mode?: Mode;
	/**
	 * The size of the component.
	 */
	size?: Size;
} & Omit<ToggleGroupRadix.ToggleGroupSingleProps, "type", "defaultValue"> &
	SpacingProps;

export type ToggleGroupItemProps = ToggleGroupRadix.ToggleGroupItemProps;

import * as React from "react";

export const MenuContext = React.createContext<{
	getItemProps: (
		userProps?: React.HTMLProps<HTMLElement>,
	) => Record<string, unknown>;
	activeIndex: number | null;
	setActiveIndex: React.Dispatch<React.SetStateAction<number | null>>;
	setHasFocusInside: React.Dispatch<React.SetStateAction<boolean>>;
	isOpen: boolean;
}>({
	getItemProps: () => ({}),
	activeIndex: null,
	/* v8 ignore next 2 */
	setActiveIndex: () => {},
	setHasFocusInside: () => {},
	isOpen: false,
});

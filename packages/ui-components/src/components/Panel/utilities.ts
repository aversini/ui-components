import clsx from "clsx";

import { MESSAGEBOX_CLASSNAME, PANEL_CLASSNAME } from "../../common/constants";

export const TYPE_PANEL = "panel";
export const TYPE_MESSAGEBOX = "messagebox";

export const getPanelClassName = ({
	mode,
	borderKind,
}: {
	borderKind: string;
	mode: string;
}) => {
	return {
		main: clsx("flex flex-col bg-surface-medium md:max-w-2xl", {
			[`${PANEL_CLASSNAME} h-full min-h-[95%] w-full sm:h-auto sm:min-h-[10rem] sm:w-[95%] sm:rounded-lg sm:border-2`]:
				mode === TYPE_PANEL,
			[`${MESSAGEBOX_CLASSNAME} w-[95%] rounded-lg border-2 sm:w-[50%]`]:
				mode === TYPE_MESSAGEBOX,
			"sm:border-border-dark": borderKind === "dark" && mode === TYPE_PANEL,
			"sm:border-border-light": borderKind === "light" && mode === TYPE_PANEL,
			"border-border-dark": borderKind === "dark" && mode === TYPE_MESSAGEBOX,
			"border-border-light": borderKind === "light" && mode === TYPE_MESSAGEBOX,
		}),
		content: "flex flex-grow flex-col py-2 sm:py-4 px-4",
		footer: "flex flex-grow flex-col p-4",
		header: "flex flex-row-reverse justify-between p-4 text-xl font-bold",
	};
};

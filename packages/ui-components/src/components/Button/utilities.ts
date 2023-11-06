import clsx from "clsx";

export const TYPE_ICON = "icon";
export const TYPE_BUTTON = "button";
export const TYPE_LINK = "link";

type getButtonClassesProps = {
	type: typeof TYPE_BUTTON | typeof TYPE_ICON | typeof TYPE_LINK;
	className?: string;
	raw: boolean;
	kind: string;
	disabled: boolean;
	fullWidth: boolean;
	slim?: boolean;
};

export const getButtonClasses = ({
	type,
	className,
	raw,
	kind,
	disabled,
	fullWidth,
	slim,
}: getButtonClassesProps) => {
	return clsx(
		className,
		"focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-offset-0",
		{
			"text-sm font-medium sm:text-base": type === TYPE_BUTTON,
			"text-center text-sm": type === TYPE_LINK,
			"p-2": type === TYPE_ICON,
			"rounded-full ": !raw,
			"rounded-sm ": raw,
			"bg-slate-900 text-slate-200 hover:bg-slate-800 active:bg-slate-700 active:text-slate-300":
				kind === "dark" && !disabled && !raw,
			"bg-slate-900 text-slate-200": kind === "dark" && disabled && !raw,
			"bg-slate-500 text-slate-200 hover:bg-slate-600 active:bg-slate-700 active:text-slate-300":
				kind === "light" && !disabled && !raw,
			"bg-slate-500 text-slate-200": kind === "light" && disabled && !raw,
			"w-full": fullWidth,
			"px-0 py-1 sm:px-4":
				(slim && !raw && (type === TYPE_BUTTON || type === TYPE_LINK)) ||
				(!slim && !raw && type === TYPE_LINK),
			"px-4 py-2": !slim && !raw && type === TYPE_BUTTON,
			"disabled:cursor-not-allowed disabled:opacity-50": disabled,
			"max-h-8": type === TYPE_LINK,
		},
	);
};

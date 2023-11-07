import { defaultIconSize } from "./constants";
import type { IconsProps } from "./IconsTypes";

export const IconCopied = ({ className }: IconsProps) => {
	const generatedClassName = className ? className : defaultIconSize;

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="currentColor"
			className={generatedClassName}
		>
			<path d="m10.933 13.519-2.226-2.226-1.414 1.414 3.774 3.774 5.702-6.84-1.538-1.282z"></path>
			<path d="M19 3H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM5 19V5h14l.002 14H5z"></path>
		</svg>
	);
};

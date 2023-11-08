import { SvgIcon } from "../private/SvgIcon/SvgIcon";
import { defaultIconSize } from "./constants";
import type { IconsProps } from "./IconsTypes";

export const IconSettings = ({
	className,
	viewBox,
	spacing,
	...rest
}: IconsProps) => {
	return (
		<SvgIcon
			defaultViewBox="0 0 448 512"
			defaultClassName={defaultIconSize}
			viewBox={viewBox}
			className={className}
			spacing={spacing}
			{...rest}
		>
			{/* Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
			<path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z" />
		</SvgIcon>
	);
};

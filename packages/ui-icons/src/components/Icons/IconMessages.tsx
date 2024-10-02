/**
 * This file was automatically generated.
 * Please do not edit manually.
 *
 * To update this file, run `yarn build:icons`.
 *
 * Original name: messages.svg
 *
 * !Font Awesome Pro 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2024 Fonticons, Inc.
 *
 */

import { SvgIcon } from "@versini/ui-private";

import type { IconsProps } from "./IconsTypes";

export const IconMessages = ({
	className,
	viewBox,
	spacing,
	title,
	monotone,
	...rest
}: IconsProps) => {
	/* v8 ignore next 1 */
	const opacity = monotone ? "1" : "0.4";
	return (
		<SvgIcon
			defaultViewBox="0 0 640 512"
			defaultClassName="size-5"
			viewBox={viewBox}
			className={className}
			spacing={spacing}
			title={title || "Messages"}
			{...rest}
		>
			<path
				className="fa-secondary"
				opacity={opacity}
				d="M256 352l96 0c53 0 96-43 96-96l0-128 128 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64l-32 0 0 48c0 6.1-3.4 11.6-8.8 14.3s-11.9 2.1-16.8-1.5L437.3 448 320 448c-35.3 0-64-28.7-64-64l0-32z"
			/>
			<path
				className="fa-primary"
				d="M0 64C0 28.7 28.7 0 64 0L352 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64l-149.3 0-81.1 60.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3l0-48-32 0c-35.3 0-64-28.7-64-64L0 64z"
			/>
		</SvgIcon>
	);
};

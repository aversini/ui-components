/**
 * This file was automatically generated.
 * Please do not edit manually.
 *
 * To update this file, run `yarn build:icons`.
 *
 * Original name: face-smile.svg
 *
 * !Font Awesome Pro 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.
 *
 */

import { SvgIcon } from "../private/SvgIcon/SvgIcon";
import type { IconsProps } from "./IconsTypes";

export const IconUser = ({
	className,
	viewBox,
	spacing,
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	monotone,
	...rest
}: IconsProps) => {
	return (
		<SvgIcon
			defaultViewBox="0 0 512 512"
			defaultClassName="h-5 w-5"
			viewBox={viewBox}
			className={className}
			spacing={spacing}
			title="User"
			{...rest}
		>
			<path
				className="fa-secondary"
				opacity="0.4"
				d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM164.1 325.5C182 346.2 212.6 368 256 368s74-21.8 91.9-42.5c5.8-6.7 15.9-7.4 22.6-1.6s7.4 15.9 1.6 22.6C349.8 372.1 311.1 400 256 400s-93.8-27.9-116.1-53.5c-5.8-6.7-5.1-16.8 1.6-22.6s16.8-5.1 22.6 1.6zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
			/>
			<path
				className="fa-primary"
				d="M176.4 240a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm160 0a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"
			/>
		</SvgIcon>
	);
};

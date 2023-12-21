/**
 * This file was automatically generated.
 * Please do not edit manually.
 *
 * To update this file, run `yarn build:icons`.
 *
 * Original name: eye-slash.svg
 *
 * !Font Awesome Pro 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.
 *
 */

import { SvgIcon } from "../private/SvgIcon/SvgIcon";
import type { IconsProps } from "./IconsTypes";

export const IconHide = ({
	className,
	viewBox,
	spacing,

	monotone,
	...rest
}: IconsProps) => {
	/* v8 ignore next 1 */
	const opacity = monotone ? "1" : "0.4";
	return (
		<SvgIcon
			defaultViewBox="0 0 640 512"
			defaultClassName="h-5 w-5"
			viewBox={viewBox}
			className={className}
			spacing={spacing}
			title="Hide"
			{...rest}
		>
			<path
				className="fa-secondary"
				opacity={opacity}
				d="M360.8 380.3C339.4 392.8 314.6 400 288 400c-79.5 0-144-64.5-144-144c0-14.5 2.1-28.5 6.1-41.7L63.5 146c-29.4 34.7-49.9 70.8-61.1 97.6c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480c56.1 0 104.4-17.8 144.5-43.2l-71.7-56.5zM198.5 252.4c-3.7 .8-6.7 3.7-6.5 7.7c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9c1.9-.5 3.9-1.1 5.7-1.7l-120-94.6zm89-52.4l94.8 74.3c2.7-13.9 2.4-28.6-1.5-43.2c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 2.7-.2 5.4-.5 8zM432 256c0 17.7-3.2 34.6-9 50.2l84.1 65.9c32.3-36.6 54.6-75.4 66.4-103.9c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32c-60 0-111.1 20.3-152.8 48.7L207 136.9c23.1-15.7 51-24.9 81-24.9c79.5 0 144 64.5 144 144z"
			/>
			<path
				className="fa-primary"
				d="M5.1 9.2C13.3-1.2 28.4-3.1 38.8 5.1l592 464c10.4 8.2 12.3 23.3 4.1 33.7s-23.3 12.3-33.7 4.1L9.2 42.9C-1.2 34.7-3.1 19.6 5.1 9.2z"
			/>
		</SvgIcon>
	);
};

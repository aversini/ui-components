import React from "react";

import { truncate } from "../../common/utilities";
import type { ButtonLinkProps } from "./ButtonTypes";
import { getButtonClasses, TYPE_LINK } from "./utilities";

export const ButtonLink = React.forwardRef<HTMLAnchorElement, ButtonLinkProps>(
	(
		{
			children,
			mode = "system",
			focusMode = "system",
			fullWidth = false,
			className,
			size = "small",
			raw = false,
			noBorder = false,
			"aria-label": ariaLabel,
			link,
			target,
			maxLabelLength,
			noTruncate = false,
			spacing,

			...otherProps
		},
		ref,
	) => {
		const buttonClass = getButtonClasses({
			type: TYPE_LINK,
			mode,
			focusMode,
			fullWidth,
			disabled: false,
			raw,
			className,
			size,
			noBorder,
			spacing,
		});

		const formattedLabel =
			maxLabelLength && typeof children === "string"
				? truncate(children, maxLabelLength)
				: null;

		const extraProps = {
			target,
			rel: target === "_blank" ? "noopener noreferrer" : undefined,
			...otherProps,
		};

		return (
			<a
				ref={ref}
				aria-label={ariaLabel || formattedLabel?.fullString}
				className={buttonClass}
				href={link}
				{...extraProps}
			>
				<span {...(!noTruncate && { className: "truncate" })}>
					{formattedLabel?.truncatedString || children}
				</span>
			</a>
		);
	},
);

ButtonLink.displayName = "ButtonLink";

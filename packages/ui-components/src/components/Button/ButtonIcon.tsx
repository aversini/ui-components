import React from "react";

import type { ButtonIconProps } from "./ButtonTypes";
import { getButtonClasses, TYPE_ICON } from "./utilities";

export const ButtonIcon = React.forwardRef<HTMLButtonElement, ButtonIconProps>(
	(
		{
			children,
			disabled = false,
			kind = "dark",
			focus = "light",
			fullWidth = false,
			className,
			type = "button",
			raw = false,
			noBorder = false,
			"aria-label": ariaLabel,
			label,
			size = "medium",
			labelRight,
			spacing,

			...otherProps
		},
		ref,
	) => {
		const buttonClass = getButtonClasses({
			type: TYPE_ICON,
			kind,
			focus,
			fullWidth,
			disabled,
			raw,
			className,
			noBorder,
			size,
			labelRight,
			spacing,
		});

		return (
			<button
				ref={ref}
				className={buttonClass}
				disabled={disabled}
				type={type}
				aria-label={ariaLabel || label}
				{...otherProps}
			>
				{children}
				{labelRight && <span className="pl-2">{labelRight}</span>}
			</button>
		);
	},
);

ButtonIcon.displayName = "ButtonIcon";

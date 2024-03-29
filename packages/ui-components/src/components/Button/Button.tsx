import React from "react";

import type { ButtonProps } from "./ButtonTypes";
import { getButtonClasses, TYPE_BUTTON } from "./utilities";

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			children,
			onClick,
			disabled = false,
			mode = "system",
			focusMode = "system",
			fullWidth = false,
			className,
			size = "medium",
			type = "button",
			raw = false,
			noBorder = false,
			"aria-label": ariaLabel,
			spacing,
			variant = "primary",

			...otherProps
		},
		ref,
	) => {
		const buttonClass = getButtonClasses({
			type: TYPE_BUTTON,
			mode,
			focusMode,
			fullWidth,
			disabled,
			raw,
			className,
			size,
			noBorder,
			spacing,
			variant,
		});

		return (
			<button
				ref={ref}
				className={buttonClass}
				onClick={onClick}
				disabled={disabled}
				type={type}
				aria-label={ariaLabel}
				{...otherProps}
			>
				{children}
			</button>
		);
	},
);

Button.displayName = "Button";

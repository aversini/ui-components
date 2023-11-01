import "./button.css";

import {
	autoUpdate,
	flip,
	offset,
	shift,
	useDismiss,
	useFloating,
	useHover,
	useInteractions,
	useMergeRefs,
	useRole,
} from "@floating-ui/react";
import React, { useState } from "react";

import type { ButtonIconProps } from "./ButtonTypes";
import { getButtonClasses, TYPE_ICON } from "./utilities";

export const ButtonIcon = React.forwardRef<HTMLButtonElement, ButtonIconProps>(
	(
		{
			children,
			onClick,
			disabled = false,
			kind = "dark",
			fullWidth = false,
			className,
			type = "button",
			raw = false,
			"aria-label": ariaLabel,
			label,
		},
		ref,
	) => {
		const buttonClass = getButtonClasses({
			type: TYPE_ICON,
			kind,
			fullWidth,
			disabled,
			raw,
			className,
		});

		const [isOpen, setIsOpen] = useState(false);
		const { refs, context } = useFloating({
			open: isOpen,
			onOpenChange: setIsOpen,
			placement: "top",
			// Make sure the tooltip stays on the screen
			whileElementsMounted: autoUpdate,
			middleware: [
				offset(5),
				flip({
					fallbackAxisSideDirection: "start",
				}),
				shift(),
			],
		});

		// Event listeners to change the open state
		const hover = useHover(context, {
			move: false,
			delay: {
				open: 1000,
				close: 500,
			},
		});

		const dismiss = useDismiss(context);
		// Role props for screen readers
		const role = useRole(context, { role: "tooltip" });

		// Merge all the interactions into prop getters
		const { getReferenceProps } = useInteractions([hover, dismiss, role]);

		const allRef = useMergeRefs([refs.setReference, ref]);

		return (
			<>
				<button
					ref={allRef}
					className={buttonClass}
					onClick={onClick}
					disabled={disabled}
					type={type}
					aria-label={ariaLabel || label}
					{...getReferenceProps()}
				>
					{children}
				</button>
			</>
		);
	},
);

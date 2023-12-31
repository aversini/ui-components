import type { SpacingType } from "../../common";

export type FooterProps = {
	kind?: "dark" | "light";
	className?: string;
	noPaddings?: boolean;
	row1?: React.ReactNode;
	row2?: React.ReactNode;
	spacing?: SpacingType;
};

import React from "react";

import type { SpacingType } from "../../common";

export type TableProps = {
	kind?: "dark" | "light";
	/**
	 * This attribute defines the caption (or title) of a table.
	 */
	caption?: React.ReactNode;
	/**
	 * This attribute defines an alternative text that summarizes
	 * the content of the table. It is not visible but will be
	 * read out loud by screen readers to represent the table.
	 */
	summary?: string;
	/**
	 * The max height of the table. It follows the CSS max-height property.
	 * Note: It is required to configure 'maxHeight' prop for the prop
	 * 'stickyHeader' to work.
	 */
	maxHeight?: string;
	/**
	 * If true, the table header will be sticky.
	 * Note: It is required to configure 'maxHeight' prop for the prop
	 * 'stickyHeader' to work.
	 */
	stickyHeader?: boolean;
	/**
	 * Custom spacing for the component.
	 */
	spacing?: SpacingType;
} & React.HTMLAttributes<HTMLTableElement>;

export type TableRowProps = React.HTMLAttributes<HTMLTableRowElement>;
export type TableBodyProps = React.HTMLAttributes<HTMLTableSectionElement>;
export type TableHeadProps = React.HTMLAttributes<HTMLTableSectionElement>;

export type TableCellProps = {
	component?: "td" | "th";
} & React.ThHTMLAttributes<HTMLTableCellElement> &
	React.TdHTMLAttributes<HTMLTableCellElement>;

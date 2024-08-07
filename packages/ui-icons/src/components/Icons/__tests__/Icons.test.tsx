import { render, screen } from "@testing-library/react";
import { SpacingProps } from "@versini/ui-private/dist/utilities";

import {
	IconAdd,
	IconBack,
	IconBrightness,
	IconChart,
	IconClose,
	IconCopied,
	IconCopy,
	IconDelete,
	IconDog,
	IconDown,
	IconEdit,
	IconGitHub,
	IconHide,
	IconHistory,
	IconInfo,
	IconKey,
	IconLocked,
	IconNext,
	IconPrevious,
	IconProfile,
	IconRefresh,
	IconRestore,
	IconSettings,
	IconShow,
	IconSort,
	IconSortDown,
	IconSortUp,
	IconStarInCircle,
	IconUp,
	IconUser,
} from "../..";

const defaultIconSize = "size-5";

const renderExpected = async ({
	dataTestId,
	fill,
	viewBox,
	className,
	spacing,
}: {
	dataTestId: string;
	className?: string;
	fill?: string;
	viewBox?: string;
} & SpacingProps) => {
	const svg = await screen.findByTestId(dataTestId);
	expect(svg.getAttribute("fill")).toBe(fill ? fill : "currentColor");
	expect(svg.getAttribute("viewBox")).toContain(viewBox ? viewBox : "0 0 ");
	expect(svg.getAttribute("class")).toContain(
		className ? className : defaultIconSize,
	);
	if (typeof spacing === "string") {
		expect(svg.getAttribute("class")).toContain(`m-${spacing}`);
	}
	if (typeof spacing === "number") {
		expect(svg.getAttribute("class")).toContain(`m-${spacing}`);
	}
	if (typeof spacing === "object") {
		expect(svg.getAttribute("class")).toContain(`mt-${spacing.t}`);
	}
};

describe("Generic Icons prop tests", () => {
	it.each`
		fill         | viewBox          | className    | spacing       | description
		${"red"}     | ${"0 0 666 666"} | ${"toto"}    | ${undefined}  | ${"with fill, viewBox and className"}
		${undefined} | ${undefined}     | ${undefined} | ${undefined}  | ${"with default fill, default viewBox and default className"}
		${undefined} | ${undefined}     | ${undefined} | ${"666"}      | ${"with string spacing"}
		${undefined} | ${undefined}     | ${undefined} | ${666}        | ${"with number spacing"}
		${undefined} | ${undefined}     | ${undefined} | ${{ t: 666 }} | ${"with object spacing"}
	`(
		"should render Icons $description",
		async ({ fill, viewBox, className, spacing }) => {
			render(
				<>
					<IconChart
						data-testid="icon-chart"
						className={className}
						fill={fill}
						viewBox={viewBox}
						spacing={spacing}
					/>
					<IconHistory
						data-testid="icon-history"
						className={className}
						fill={fill}
						viewBox={viewBox}
						spacing={spacing}
					/>
					<IconInfo
						data-testid="icon-info"
						className={className}
						fill={fill}
						viewBox={viewBox}
						spacing={spacing}
					/>
					<IconProfile
						data-testid="icon-profile"
						className={className}
						fill={fill}
						viewBox={viewBox}
						spacing={spacing}
					/>
					<IconClose
						data-testid="icon-close"
						className={className}
						fill={fill}
						viewBox={viewBox}
						spacing={spacing}
					/>
					<IconCopied
						data-testid="icon-copied"
						className={className}
						fill={fill}
						viewBox={viewBox}
						spacing={spacing}
					/>
					<IconCopy
						data-testid="icon-copy"
						className={className}
						fill={fill}
						viewBox={viewBox}
						spacing={spacing}
					/>
					<IconDelete
						data-testid="icon-delete"
						className={className}
						fill={fill}
						viewBox={viewBox}
						spacing={spacing}
					/>
					<IconEdit
						data-testid="icon-edit"
						className={className}
						fill={fill}
						viewBox={viewBox}
						spacing={spacing}
					/>
					<IconRestore
						data-testid="icon-restore"
						className={className}
						fill={fill}
						viewBox={viewBox}
						spacing={spacing}
					/>
					<IconSettings
						data-testid="icon-settings"
						className={className}
						fill={fill}
						viewBox={viewBox}
						spacing={spacing}
					/>
					<IconUser
						data-testid="icon-user"
						className={className}
						fill={fill}
						viewBox={viewBox}
						spacing={spacing}
					/>
					<IconHide
						data-testid="icon-hide"
						className={className}
						fill={fill}
						viewBox={viewBox}
						spacing={spacing}
					/>
					<IconShow
						data-testid="icon-show"
						className={className}
						fill={fill}
						viewBox={viewBox}
						spacing={spacing}
					/>
					<IconBack
						data-testid="icon-back"
						className={className}
						fill={fill}
						viewBox={viewBox}
						spacing={spacing}
					/>
					<IconNext
						data-testid="icon-next"
						className={className}
						fill={fill}
						viewBox={viewBox}
						spacing={spacing}
					/>
					<IconPrevious
						data-testid="icon-previous"
						className={className}
						fill={fill}
						viewBox={viewBox}
						spacing={spacing}
					/>
					<IconGitHub
						data-testid="icon-github"
						className={className}
						fill={fill}
						viewBox={viewBox}
						spacing={spacing}
					/>
					<IconBrightness
						data-testid="icon-brightness"
						className={className}
						fill={fill}
						viewBox={viewBox}
						spacing={spacing}
					/>
					<IconDown
						data-testid="icon-down"
						className={className}
						fill={fill}
						viewBox={viewBox}
						spacing={spacing}
					/>
					<IconUp
						data-testid="icon-up"
						className={className}
						fill={fill}
						viewBox={viewBox}
						spacing={spacing}
					/>
					<IconAdd
						data-testid="icon-add"
						className={className}
						fill={fill}
						viewBox={viewBox}
						spacing={spacing}
					/>
					<IconStarInCircle
						data-testid="icon-star-in-circle"
						className={className}
						fill={fill}
						viewBox={viewBox}
						spacing={spacing}
					/>
					<IconSort
						data-testid="icon-sort"
						className={className}
						fill={fill}
						viewBox={viewBox}
						spacing={spacing}
					/>
					<IconSortDown
						data-testid="icon-sort-down"
						className={className}
						fill={fill}
						viewBox={viewBox}
						spacing={spacing}
					/>
					<IconSortUp
						data-testid="icon-sort-up"
						className={className}
						fill={fill}
						viewBox={viewBox}
						spacing={spacing}
					/>
					<IconRefresh
						data-testid="icon-refresh"
						className={className}
						fill={fill}
						viewBox={viewBox}
						spacing={spacing}
					/>
					<IconLocked
						data-testid="icon-locked"
						className={className}
						fill={fill}
						viewBox={viewBox}
						spacing={spacing}
					/>
					<IconKey
						data-testid="icon-key"
						className={className}
						fill={fill}
						viewBox={viewBox}
						spacing={spacing}
					/>
				</>,
			);
			[
				"icon-back",
				"icon-chart",
				"icon-history",
				"icon-info",
				"icon-profile",
				"icon-close",
				"icon-copied",
				"icon-copy",
				"icon-delete",
				"icon-edit",
				"icon-restore",
				"icon-settings",
				"icon-user",
				"icon-hide",
				"icon-show",
				"icon-next",
				"icon-previous",
				"icon-github",
				"icon-brightness",
				"icon-down",
				"icon-up",
				"icon-add",
				"icon-star-in-circle",
				"icon-sort",
				"icon-sort-down",
				"icon-sort-up",
				"icon-refresh",
				"icon-locked",
				"icon-key",
			].forEach(async (dataTestId) => {
				await renderExpected({
					dataTestId,
					fill,
					viewBox,
					className,
					spacing,
				});
			});
		},
	);
});

describe("Custom IconDog prop tests", () => {
	it.each`
		fill         | viewBox          | className    | spacing       | description
		${"red"}     | ${"0 0 666 666"} | ${"toto"}    | ${undefined}  | ${"with fill, viewBox and className"}
		${undefined} | ${undefined}     | ${undefined} | ${undefined}  | ${"with default fill, default viewBox and default className"}
		${undefined} | ${undefined}     | ${undefined} | ${"666"}      | ${"with string spacing"}
		${undefined} | ${undefined}     | ${undefined} | ${666}        | ${"with number spacing"}
		${undefined} | ${undefined}     | ${undefined} | ${{ t: 666 }} | ${"with object spacing"}
	`(
		"should render IconDog $description",
		async ({ fill, viewBox, className, spacing }) => {
			render(
				<IconDog
					data-testid="icon-dog"
					className={className}
					fill={fill}
					viewBox={viewBox}
					spacing={spacing}
				/>,
			);

			const svg = await screen.findByTestId("icon-dog");
			expect(svg.getAttribute("fill")).toBe(fill ? fill : "currentColor");
			expect(svg.getAttribute("viewBox")).toContain(viewBox ? viewBox : "0 0 ");
			expect(svg.getAttribute("class")).toContain(
				className ? className : "w-full",
			);
			if (typeof spacing === "string") {
				expect(svg.getAttribute("class")).toContain(`m-${spacing}`);
			}
			if (typeof spacing === "number") {
				expect(svg.getAttribute("class")).toContain(`m-${spacing}`);
			}
			if (typeof spacing === "object") {
				expect(svg.getAttribute("class")).toContain(`mt-${spacing.t}`);
			}
		},
	);
});

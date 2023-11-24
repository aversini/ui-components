import { render } from "@testing-library/react";

import {
	expectToHaveClasses,
	expectToHaveStyles,
} from "../../../common/__tests__/helpers";
import { Button, Flexgrid, FlexgridItem } from "../..";

describe("FlexgridItem (exceptions)", () => {
	it("should be able to require/import from root", () => {
		expect(FlexgridItem).toBeDefined();
	});
});

describe("FlexgridItem default rules", () => {
	it("should have a set of sensible default for flex", () => {
		const { getByTestId } = render(
			<Flexgrid>
				<FlexgridItem data-testid="gridcell-1">
					<Button>item 1</Button>
				</FlexgridItem>
			</Flexgrid>,
		);
		const gridCellRoot = getByTestId("gridcell-1");
		expectToHaveStyles(gridCellRoot, {
			"flex-basis": "auto",
			"padding-left": "0.25rem",
			"padding-top": "0rem",
		});
		expectToHaveClasses(gridCellRoot, ["box-border"]);
	});
});

describe("FlexgridItem props", () => {
	it("should have attributes to span across 4 columns", () => {
		const { getByTestId } = render(
			<Flexgrid>
				<FlexgridItem data-testid="gridcell-1" span={4}>
					<Button>item 1</Button>
				</FlexgridItem>
			</Flexgrid>,
		);
		const gridCellRoot = getByTestId("gridcell-1");
		expect(gridCellRoot).toHaveStyle("flex-basis: 33.333333333333336%");
	});

	it("should have attributes to span across the full space", () => {
		const { getByTestId } = render(
			<Flexgrid>
				<FlexgridItem data-testid="gridcell-1" span="auto">
					<Button>item 1</Button>
				</FlexgridItem>
			</Flexgrid>,
		);
		const gridCellRoot = getByTestId("gridcell-1");
		expect(gridCellRoot).toHaveStyle("flex-basis: auto");
		expect(gridCellRoot).toHaveStyle("flex-grow: 1");
		expect(gridCellRoot).toHaveStyle("max-width: 100%");
	});
});

import parser from "postcss-selector-parser";
import type { Pseudo } from "postcss-selector-parser";

const parseSelector = parser();

export const commonTrailingPseudos = (selector: parser.Selectors) => {
	const ast = parseSelector.astSync(selector);

	const matrix: Pseudo[][] = [];

	// Put the pseudo elements in reverse order in a sparse, column-major 2D array
	for (const [i, sel] of ast.nodes.entries()) {
		for (const [j, child] of [...sel.nodes].reverse().entries()) {
			// We only care about pseudo elements
			if (child.type !== "pseudo" || !child.value.startsWith("::")) {
				break;
			}

			matrix[j] = matrix[j] || [];
			matrix[j][i] = child;
		}
	}

	const trailingPseudos = parser.selector({
		value: "",
	});

	// At this point the pseudo elements are in a column-major 2D array
	// This means each row contains one "column" of pseudo elements from each selector
	// We can compare all the pseudo elements in a row to see if they are the same
	for (const pseudos of matrix) {
		// It's a sparse 2D array so there are going to be holes in the rows
		// We skip those
		if (!pseudos) {
			continue;
		}

		const values = new Set([...pseudos.map((p: { value: any }) => p.value)]);

		// The pseudo elements are not the same
		if (values.size > 1) {
			break;
		}

		pseudos.forEach((pseudo: { remove: () => any }) => pseudo.remove());
		trailingPseudos.prepend(pseudos[0]);
	}

	if (trailingPseudos.nodes.length) {
		return [trailingPseudos.toString(), ast.toString()];
	}

	return [null, selector];
};

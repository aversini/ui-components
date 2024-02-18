import type { Story } from "@ladle/react";
import { Toggle } from "@versini/ui-components";
import { useState } from "react";

export default {
	title: "Form components/Toggle",
};

export const Basic: Story<any> = () => {
	const [checked, setChecked] = useState(false);

	return (
		<>
			<div className="min-h-10 bg-slate-900 p-11">
				<div className="flex flex-wrap gap-2">
					<Toggle
						onChange={setChecked}
						checked={checked}
						label="GPT-4 light"
						name="GPT-4 light"
						kind="light"
					/>
				</div>
			</div>

			<div className="min-h-10 p-11">
				<div className="flex flex-wrap gap-2">
					<Toggle
						onChange={setChecked}
						checked={checked}
						label="GPT-4 dark"
						name="GPT-4 dark"
					/>
				</div>
			</div>
		</>
	);
};
import type { Story } from "@ladle/react";
import { Button } from "@versini/ui-components";
import { TextArea } from "@versini/ui-form";

export default {
	title: "Form components/TextArea",
	meta: {
		importName: "TextArea",
		importPackage: "ui-form",
	},
	args: {
		label: "Type your question here",
		name: "dude",
		disabled: false,
		helperText: "",
		raw: false,
		focusMode: "system",
		mode: "system",
		error: false,
		textAreaClassName: "",
		className: "",
	},
	argTypes: {
		mode: {
			options: ["dark", "light", "system", "alt-system"],
			control: { type: "radio" },
		},
		focusMode: {
			options: ["dark", "light", "system", "alt-system"],
			control: { type: "radio" },
		},
	},
};

export const Basic: Story<any> = (args) => (
	<div className="h-full">
		<form noValidate>
			<div className="flex flex-wrap gap-2">
				<TextArea {...args} />
				<TextArea {...args} />
				<TextArea {...args} helperTextOnFocus />
			</div>
		</form>
	</div>
);
Basic.args = {
	helperText: "Powered by the sun",
};

export const RightElement: Story<any> = (args) => (
	<div className="h-full">
		<form noValidate>
			<div className="flex gap-2">
				<TextArea {...args} />
			</div>
		</form>
	</div>
);
RightElement.args = {
	rightElement: (
		<Button mode="light" noBorder>
			Send
		</Button>
	),
	helperText: "Powered by the sun",
};

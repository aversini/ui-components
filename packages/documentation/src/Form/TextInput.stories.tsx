import type { Story } from "@ladle/react";
import { Button, TextInput } from "@versini/ui-components";

export default {
	title: "Form components/TextInput",
	meta: {
		importName: "TextInput",
	},
	args: {
		type: "text",
		label: "Type your question here",
		name: "somebody",
		disabled: false,
		helperText: "",
		raw: false,
		focusMode: "system",
		error: false,
		inputClassName: "",
		className: "",
		mode: "system",
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
	<div className="min-h-10">
		<form noValidate>
			<div className="flex gap-2">
				<TextInput {...args} />
			</div>
		</form>
	</div>
);

export const RightElement: Story<any> = (args) => (
	<div className="min-h-10">
		<form noValidate>
			<div className="flex gap-2">
				<TextInput {...args} />
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

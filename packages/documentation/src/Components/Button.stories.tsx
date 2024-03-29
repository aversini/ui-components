import type { Story } from "@ladle/react";
import { Button } from "@versini/ui-components";

export default {
	title: "Components/Button",
	meta: {
		importName: "Button",
	},
};

export const Basic: Story<any> = (args) => {
	return (
		<>
			<div className="flex flex-wrap gap-2">
				<Button {...args}>Button</Button>
				<Button {...args}>Button</Button>
				<Button {...args}>Button</Button>
			</div>

			<p>
				The following row is having the <code>variant</code> prop hard-coded:
			</p>
			<div className="flex flex-wrap gap-2">
				<Button {...args} variant="primary">
					Button
				</Button>
				<Button {...args} variant="secondary">
					Button
				</Button>
				<Button {...args} variant="danger">
					Button
				</Button>
			</div>
		</>
	);
};

Basic.args = {
	disabled: false,
	fullWidth: false,
	mode: "system",
	focusMode: "system",
	size: "medium",
	raw: false,
	noBorder: false,
	variant: "primary",
};
Basic.argTypes = {
	mode: {
		options: ["dark", "light", "system", "alt-system"],
		control: { type: "radio" },
	},
	focusMode: {
		options: ["dark", "light", "system", "alt-system"],
		control: { type: "radio" },
	},
	size: {
		options: ["small", "medium", "large"],
		control: { type: "radio" },
	},
	variant: {
		options: ["primary", "secondary", "danger"],
		control: { type: "radio" },
	},
};

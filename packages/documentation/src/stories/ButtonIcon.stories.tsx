import type { Meta, StoryObj } from "@storybook/react";
import { ButtonIcon, IconSettings } from "@versini/ui-components";

const meta: Meta<typeof ButtonIcon> = {
	component: ButtonIcon,
	parameters: {
		controls: { exclude: ["spacing"], sort: "requiredFirst" },
	},
	args: {
		disabled: false,
		fullWidth: false,
		kind: "dark",
		type: "button",
		raw: false,
	},
	argTypes: {
		className: {
			control: "text",
		},
		kind: {
			options: ["dark", "light"],
			control: { type: "radio" },
		},
		disabled: {
			control: "boolean",
		},
		fullWidth: {
			control: "boolean",
		},
		raw: {
			control: "boolean",
		},
	},
};

export default meta;

type Story = StoryObj<typeof ButtonIcon>;

export const Basic: Story = {
	render: (args) => (
		<div className="flex gap-2">
			<ButtonIcon {...args}>
				<IconSettings />
			</ButtonIcon>
			<ButtonIcon {...args}>
				<IconSettings />
			</ButtonIcon>
			<ButtonIcon {...args}>
				<IconSettings />
			</ButtonIcon>
			<ButtonIcon {...args}>
				<IconSettings />
			</ButtonIcon>
		</div>
	),
};
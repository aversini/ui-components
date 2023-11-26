import type { Meta, StoryObj } from "@storybook/react";
import { ButtonLink } from "@versini/ui-components";

const meta: Meta<typeof ButtonLink> = {
	component: ButtonLink,
	parameters: {
		controls: { exclude: ["spacing"], sort: "requiredFirst" },
	},
	args: {
		fullWidth: false,
		kind: "dark",
		focus: "light",
		raw: false,
		link: "https://www.google.com",
		noBorder: false,
		slim: false,
		size: "small",
	},
	argTypes: {
		className: {
			control: "text",
		},
		kind: {
			options: ["dark", "light"],
			control: { type: "radio" },
		},
		focus: {
			options: ["dark", "light"],
			control: { type: "radio" },
		},
		noBorder: {
			control: "boolean",
		},
		fullWidth: {
			control: "boolean",
		},
		raw: {
			control: "boolean",
		},
		slim: {
			control: "boolean",
		},
		size: {
			options: ["small", "medium", "large"],
			control: { type: "radio" },
		},
		maxLabelLength: {
			control: "number",
		},
	},
};

export default meta;

type Story = StoryObj<typeof ButtonLink>;

export const Basic: Story = {
	render: (args) => (
		<div className="flex flex-wrap gap-2">
			<ButtonLink {...args}>Button as a link</ButtonLink>
			<ButtonLink {...args}>Button as a link lorem ipsum</ButtonLink>
			<ButtonLink {...args}>Button as a link lorem ipsum dolor</ButtonLink>
			<ButtonLink {...args}>
				Button as a link lorem ipsum dolor sit amet
			</ButtonLink>
		</div>
	),
};

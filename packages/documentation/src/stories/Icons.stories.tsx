import type { Meta, StoryObj } from "@storybook/react";
import {
	IconBack,
	IconChart,
	IconClose,
	IconCopied,
	IconCopy,
	IconDelete,
	IconEdit,
	IconHide,
	IconHistory,
	IconInfo,
	IconProfile,
	IconRestore,
	IconSettings,
	IconShow,
	IconUser,
} from "@versini/ui-components";

const meta: Meta<typeof IconBack> = {
	component: IconBack,
	parameters: {
		controls: { exclude: ["spacing"], sort: "requiredFirst" },
	},
	args: {
		monotone: false,
		decorative: false,
	},
	argTypes: {
		className: {
			control: "text",
		},
		fill: {
			control: "color",
		},
		monotone: {
			control: "boolean",
		},
		decorative: {
			control: "boolean",
		},
	},
};

export default meta;

type Story = StoryObj<typeof IconBack>;

export const Basic: Story = {
	render: (args) => (
		<div className="flex flex-wrap gap-2">
			<IconBack {...args} />
			<IconChart {...args} />
			<IconClose {...args} />
			<IconCopied {...args} />
			<IconCopy {...args} />
			<IconDelete {...args} />
			<IconEdit {...args} />
			<IconHide {...args} />
			<IconHistory {...args} />
			<IconInfo {...args} />
			<IconProfile {...args} />
			<IconRestore {...args} />
			<IconSettings {...args} />
			<IconShow {...args} />
			<IconUser {...args} />
		</div>
	),
};

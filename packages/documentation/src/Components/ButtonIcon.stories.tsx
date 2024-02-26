import type { Story } from "@ladle/react";
import { ButtonIcon } from "@versini/ui-components";
import {
	IconEdit,
	IconNext,
	IconPrevious,
	IconSettings,
} from "@versini/ui-icons";

export const Basic: Story<any> = (args) => (
	<div className="flex flex-wrap">
		<ButtonIcon {...args}>
			<IconSettings />
		</ButtonIcon>
		<ButtonIcon {...args}>
			<IconSettings />
		</ButtonIcon>
		<ButtonIcon {...args}>
			<IconEdit className="h-3 w-3" />
		</ButtonIcon>
		<ButtonIcon {...args}>
			<IconEdit />
		</ButtonIcon>
	</div>
);

export const WithLabel: Story<any> = (args) => (
	<>
		<div className="flex flex-wrap">
			<ButtonIcon labelRight="Settings" {...args}>
				<IconSettings decorative />
			</ButtonIcon>
			<ButtonIcon labelRight="Settings" {...args}>
				<IconSettings decorative />
			</ButtonIcon>
			<ButtonIcon labelRight="Edit" {...args}>
				<IconEdit decorative className="h-3 w-3" />
			</ButtonIcon>
			<ButtonIcon labelRight="Edit" {...args}>
				<IconEdit decorative />
			</ButtonIcon>
		</div>
		<div className="mt-2 flex flex-wrap">
			<ButtonIcon labelLeft="Settings" {...args}>
				<IconSettings decorative />
			</ButtonIcon>
			<ButtonIcon labelLeft="Settings" {...args}>
				<IconSettings decorative />
			</ButtonIcon>
			<ButtonIcon labelLeft="Edit" {...args}>
				<IconEdit decorative className="h-3 w-3" />
			</ButtonIcon>
			<ButtonIcon labelLeft="Edit" {...args}>
				<IconEdit decorative />
			</ButtonIcon>
		</div>
		<div className="mt-2 flex flex-wrap">
			<ButtonIcon labelRight="Previous page" {...args}>
				<IconPrevious decorative monotone />
			</ButtonIcon>
			<ButtonIcon labelLeft="Next page" {...args}>
				<IconNext decorative monotone />
			</ButtonIcon>
		</div>
	</>
);

export default {
	title: "Components/ButtonIcon",
	meta: {
		importName: "ButtonIcon",
	},
	args: {
		disabled: false,
		fullWidth: false,
		kind: "dark",
		focus: "light",
		type: "button",
		raw: false,
		noBorder: false,
		size: "medium",
		spacing: { r: 2 },
	},
	argTypes: {
		kind: {
			options: ["dark", "light", "system"],
			control: { type: "radio" },
		},
		focus: {
			options: ["dark", "light"],
			control: { type: "radio" },
		},
		size: {
			options: ["small", "medium", "large"],
			control: { type: "radio" },
		},
	},
};

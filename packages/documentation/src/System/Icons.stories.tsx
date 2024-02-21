import type { Story } from "@ladle/react";
import {
	IconBack,
	IconChart,
	IconClose,
	IconCopied,
	IconCopy,
	IconDelete,
	IconEdit,
	IconGitHub,
	IconHide,
	IconHistory,
	IconInfo,
	IconNext,
	IconPrevious,
	IconProfile,
	IconRestore,
	IconSettings,
	IconShow,
	IconUser,
} from "@versini/ui-components";

export default {
	title: "System/Icons",
};

export const Basic: Story<any> = (args) => (
	<div className="flex flex-wrap gap-2 bg-slate-300 p-10">
		<IconBack {...args} />
		<IconChart {...args} />
		<IconClose {...args} />
		<IconCopied {...args} />
		<IconCopy {...args} />
		<IconDelete {...args} />
		<IconEdit {...args} />
		<IconGitHub {...args} />
		<IconHide {...args} />
		<IconHistory {...args} />
		<IconInfo {...args} />
		<IconNext {...args} />
		<IconPrevious {...args} />
		<IconProfile {...args} />
		<IconRestore {...args} />
		<IconSettings {...args} />
		<IconShow {...args} />
		<IconUser {...args} />
	</div>
);

Basic.args = {
	monotone: false,
	decorative: false,
};
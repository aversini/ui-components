import type { Story } from "@ladle/react";
import {
	Button,
	ButtonIcon,
	Menu,
	MenuItem,
	MenuSeparator,
	Panel,
} from "@versini/ui-components";
import {
	IconBack,
	IconChart,
	IconHistory,
	IconInfo,
	IconProfile,
	IconSettings,
} from "@versini/ui-icons";
import { useState } from "react";

export default {
	title: "Components/Menu",
	meta: {
		importName: "Menu, MenuItem, MenuSeparator",
	},
	args: {
		mode: "system",
		focusMode: "system",
		defaultPlacement: "bottom-start",
	},
	argTypes: {
		focusMode: {
			control: { type: "radio" },
			options: ["dark", "light", "system", "alt-system"],
		},
		mode: {
			control: { type: "radio" },
			options: ["dark", "light", "system", "alt-system"],
		},

		defaultPlacement: {
			control: { type: "select" },
			options: [
				"top-start",
				"top",
				"top-end",
				"right-start",
				"right",
				"right-end",
				"bottom-start",
				"bottom",
				"bottom-end",
				"left-start",
				"left",
				"left-end",
			],
		},
	},
};

export const Basic: Story<any> = (args) => (
	<div className="flex h-96 min-h-10 flex-wrap p-11">
		<Button size="small" noBorder spacing={{ r: 2 }}>
			Button
		</Button>
		<Menu
			trigger={
				<ButtonIcon>
					<IconSettings />
				</ButtonIcon>
			}
			spacing={{ r: 2 }}
			{...args}
		>
			<MenuItem label="Profile" />
			<MenuItem label="Statistics" />
			<MenuItem label="History" />
			<MenuItem label="About" />
		</Menu>
		<Button size="small" noBorder>
			Button
		</Button>
	</div>
);

export const WithIcons: Story<any> = (args) => (
	<div className="flex min-h-10 flex-wrap p-11">
		<Button size="small" spacing={{ r: 2 }}>
			Button
		</Button>
		<Menu
			trigger={
				<ButtonIcon>
					<IconSettings />
				</ButtonIcon>
			}
			spacing={{ r: 2 }}
			{...args}
		>
			<MenuItem label="Profile" icon={<IconProfile />} />
			<MenuItem label="Statistics" icon={<IconChart />} />
			<MenuItem label="History" icon={<IconHistory />} />
			<MenuItem label="About" icon={<IconInfo />} />
		</Menu>
		<Button size="small">Button</Button>
	</div>
);

export const WithMessageBox: Story<any> = (args) => {
	const [showMessage, setShowMessage] = useState(false);
	const handleMenuLogout = () => {
		setShowMessage(!showMessage);
	};
	const onLogout = () => {
		// console.log("==> logout!");
		setShowMessage(!showMessage);
	};
	const onCancel = () => {
		// console.log("==> cancel logout...");
		setShowMessage(!showMessage);
	};
	return (
		<>
			<Panel
				kind="messagebox"
				open={showMessage}
				onOpenChange={setShowMessage}
				title="Log out"
				footer={
					<div className="flex flex-row-reverse gap-2">
						<Button onClick={onLogout}>Log out</Button>
						<Button mode="light" onClick={onCancel}>
							Cancel
						</Button>
					</div>
				}
			>
				<p>Are you sure you want to log out?</p>
			</Panel>
			<div className="flex min-h-10 flex-wrap p-11">
				<Button size="small" spacing={{ r: 2 }}>
					Button
				</Button>
				<Menu
					trigger={
						<ButtonIcon>
							<IconSettings />
						</ButtonIcon>
					}
					spacing={{ r: 2 }}
					{...args}
				>
					<MenuItem label="Profile" icon={<IconProfile />} />
					<MenuItem label="Statistics" icon={<IconChart />} />
					<MenuItem label="History" icon={<IconHistory />} />
					<MenuItem label="About" icon={<IconInfo />} />
					<MenuSeparator />
					<MenuItem
						onClick={handleMenuLogout}
						label="Log out"
						icon={
							<div className="text-red-700">
								<IconBack monotone />
							</div>
						}
					/>
				</Menu>
				<Button size="small">Button</Button>
			</div>
		</>
	);
};

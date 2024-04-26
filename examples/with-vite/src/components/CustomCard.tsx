import { Card, Menu, MenuItem, Panel } from "@versini/ui-components";
import {
	IconChart,
	IconHistory,
	IconInfo,
	IconProfile,
	IconSettings,
} from "@versini/ui-icons";
import { Flexgrid, FlexgridItem } from "@versini/ui-system";
import { useState } from "react";
import { CommonTemplate } from "./CommonTemplate";

export const CustomCard = () => {
	const [open, setOpen] = useState(false);
	const onOpenChange = () => {
		setOpen(!open);
	};
	return (
		<>
			<Panel title="Profile" open={open} onOpenChange={onOpenChange}>
				Hello Profile
			</Panel>
			<Card
				header={
					<Flexgrid alignHorizontal="space-between">
						<FlexgridItem>
							<h2 className="m-0 mb-1">Kitchen Sink</h2>
						</FlexgridItem>
						<FlexgridItem>
							<Menu icon={<IconSettings />}>
								<MenuItem
									label="Profile"
									icon={<IconProfile />}
									onClick={() => {
										setOpen(true);
									}}
								/>
								<MenuItem label="Statistics" icon={<IconChart />} />
								<MenuItem label="History" icon={<IconHistory />} />
								<MenuItem label="About" icon={<IconInfo />} />
							</Menu>
						</FlexgridItem>
					</Flexgrid>
				}
			>
				<CommonTemplate />
			</Card>
		</>
	);
};

import type { Story } from "@ladle/react";
import {
	ButtonIcon,
	Table,
	TableBody,
	TableCell,
	TableFooter,
	TableHead,
	TableRow,
} from "@versini/ui-components";
import { IconDelete, IconDown, IconRestore, IconUp } from "@versini/ui-icons";
import { useState } from "react";

export default {
	title: "Components/Table",
	meta: {
		importName: "Table, TableBody, TableCell, TableHead, TableRow",
	},
	args: {
		mode: "system",
		summary: "A table about Dune",
		compact: false,
	},
	argTypes: {
		caption: {
			control: { type: "text" },
		},
		summary: {
			control: { type: "text" },
		},
		mode: {
			options: ["dark", "light", "system", "alt-system"],
			control: { type: "radio" },
		},
	},
};

const data = [
	{
		id: 1,
		character: "Paul Atreides",
		actor: "Timothée Chalamet",
		timestamp: "10/17/2023 08:46 PM EDT",
	},
	{
		id: 2,
		character: "Lady Jessica",
		actor: "Rebecca Ferguson",
		timestamp: "10/16/2023 08:55 PM EDT",
	},
	{
		id: 3,
		character: "Duncan Idaho",
		actor: "Jason Momoa",
		timestamp: "10/16/2023 08:59 PM EDT",
	},
];

export const Basic: Story<any> = (args) => {
	return (
		<div className="min-h-10">
			<div className="flex flex-wrap gap-2">
				<Table caption="Dune" {...args}>
					<TableHead>
						<TableRow>
							<TableCell>Character</TableCell>
							<TableCell>Actor</TableCell>
						</TableRow>
					</TableHead>

					<TableBody>
						{data.map((row) => (
							<TableRow key={row.id}>
								<TableCell>{row.character}</TableCell>
								<TableCell>{row.actor}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>
		</div>
	);
};

export const WithAction: Story<any> = (args) => {
	return (
		<div className="min-h-10">
			<div className="flex flex-wrap gap-2">
				<Table {...args}>
					<TableHead className="uppercase">
						<TableRow>
							<TableCell scope="col">Date</TableCell>
							<TableCell scope="col">First message</TableCell>
							<TableCell className="text-right" scope="col">
								Actions
							</TableCell>
						</TableRow>
					</TableHead>

					<TableBody>
						{data.map((row, idx) => {
							return (
								<TableRow key={`${row.id}-${idx}`}>
									<TableCell component="th" scope="row">
										{row.timestamp}
									</TableCell>
									<TableCell>{row.character}</TableCell>

									<TableCell>
										<div className="flex justify-end gap-2">
											<ButtonIcon
												noBorder
												label="Restore chat"
												mode="light"
												focusMode="alt-system"
												onClick={() => {}}
											>
												<IconRestore className="h-3 w-3" />
											</ButtonIcon>
											<ButtonIcon
												noBorder
												label="Delete chat"
												mode="light"
												focusMode="alt-system"
												onClick={() => {}}
											>
												<div className="text-red-400">
													<IconDelete className="h-3 w-3" monotone />
												</div>
											</ButtonIcon>
										</div>
									</TableCell>
								</TableRow>
							);
						})}
					</TableBody>
				</Table>
			</div>
		</div>
	);
};

export const Sticky: Story<any> = (args) => {
	const extraData = [
		{
			id: 1,
			timestamp: "10/16/2023 08:46 PM EDT",
			character: "Who plays Paul Atreides?",
			actor: "Timothée Chalamet",
		},
		{
			id: 2,
			timestamp: "10/16/2023 08:55 PM EDT",
			character: "What about Lady Jessica?",
			actor: "Rebecca Ferguson",
		},
		{
			id: 3,
			timestamp: "10/16/2023 08:59 PM EDT",
			character: "And Duncan Idaho?",
			actor: "Jason Momoa",
		},
		{
			id: 4,
			timestamp: "10/16/2023 08:59 PM EDT",
			character: "And Duncan Idaho?",
			actor: "Jason Momoa",
		},
		{
			id: 5,
			timestamp: "10/16/2023 08:59 PM EDT",
			character: "And Duncan Idaho?",
			actor: "Jason Momoa",
		},
		{
			id: 6,
			timestamp: "10/16/2023 08:59 PM EDT",
			character: "And Duncan Idaho?",
			actor: "Jason Momoa",
		},
		{
			id: 7,
			timestamp: "10/16/2023 08:59 PM EDT",
			character: "And Duncan Idaho?",
			actor: "Jason Momoa",
		},
	];

	return (
		<div className="min-h-10">
			<div className="flex flex-wrap gap-2">
				<Table {...args}>
					<TableHead className="uppercase">
						<TableRow>
							<TableCell scope="col">Date</TableCell>
							<TableCell scope="col">Question</TableCell>
							<TableCell className="text-right" scope="col">
								Answer
							</TableCell>
						</TableRow>
					</TableHead>

					<TableBody>
						{extraData.map((row, idx) => {
							return (
								<TableRow key={`${row.id}-${idx}`}>
									<TableCell component="th" scope="row">
										{row.timestamp}
									</TableCell>
									<TableCell>{row.character}</TableCell>
									<TableCell className="text-right">{row.actor}</TableCell>
								</TableRow>
							);
						})}
					</TableBody>

					<TableFooter>
						<TableRow>
							<TableCell colSpan={3} className="text-center uppercase">
								hello footer
							</TableCell>
						</TableRow>
					</TableFooter>
				</Table>
			</div>
		</div>
	);
};
Sticky.args = {
	stickyHeader: true,
	stickyFooter: true,
	maxHeight: "260px",
};

export const WithRowNumbers: Story<any> = (args) => {
	return (
		<div className="min-h-10">
			<div className="flex flex-wrap gap-2">
				<Table caption="Dune" {...args}>
					<TableHead>
						<TableRow>
							<TableCell className="sr-only">Row</TableCell>
							<TableCell>Character</TableCell>
							<TableCell>Actor</TableCell>
						</TableRow>
					</TableHead>

					<TableBody>
						{data.map((row, idx) => (
							<TableRow key={row.id}>
								<TableCell>{idx + 1}</TableCell>
								<TableCell>{row.character}</TableCell>
								<TableCell>{row.actor}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>
		</div>
	);
};

export const Sortable: Story<any> = (args) => {
	const [order, setOrder] = useState<boolean | string>(false);
	const [orderBy, setOrderBy] = useState<boolean | string>(false);
	const sortedData = data.sort((a, b) => {
		if (orderBy === "actor" || orderBy === "character") {
			if (order === "asc") {
				return a[orderBy].localeCompare(b[orderBy]);
			} else if (order === "desc") {
				return b[orderBy].localeCompare(a[orderBy]);
			}
		}
		if (orderBy === "timestamp") {
			if (order === "asc") {
				return new Date(a[orderBy]).getTime() - new Date(b[orderBy]).getTime();
			} else if (order === "desc") {
				return new Date(b[orderBy]).getTime() - new Date(a[orderBy]).getTime();
			}
		}
		return 0;
	});

	const onClickSort = (key: string) => {
		setOrderBy(key);
		if (order === false) {
			setOrder("asc");
		} else if (order === "asc") {
			setOrder("desc");
		} else {
			setOrder("asc");
		}
	};

	return (
		<div className="min-h-10">
			<div className="flex flex-wrap gap-2">
				<Table caption="Dune" {...args}>
					<TableHead>
						<TableRow>
							<TableCell scope="col">
								<ButtonIcon
									onClick={() => {
										onClickSort("timestamp");
									}}
									align="left"
									noBorder
									focusMode="alt-system"
									mode="alt-system"
									fullWidth
									labelRight="Date"
								>
									{order === "asc" && orderBy === "timestamp" ? (
										<IconUp className="h-3 w-3" monotone />
									) : order === "desc" && orderBy === "timestamp" ? (
										<IconDown className="h-3 w-3" monotone />
									) : null}
								</ButtonIcon>
							</TableCell>
							<TableCell>
								<ButtonIcon
									onClick={() => {
										onClickSort("character");
									}}
									align="left"
									noBorder
									focusMode="alt-system"
									mode="alt-system"
									fullWidth
									labelRight="Character"
								>
									{order === "asc" && orderBy === "character" ? (
										<IconUp className="h-3 w-3" monotone />
									) : order === "desc" && orderBy === "character" ? (
										<IconDown className="h-3 w-3" monotone />
									) : null}
								</ButtonIcon>
							</TableCell>
							<TableCell>
								<ButtonIcon
									onClick={() => {
										onClickSort("actor");
									}}
									align="left"
									noBorder
									focusMode="alt-system"
									mode="alt-system"
									fullWidth
									labelRight="Actor"
								>
									{order === "asc" && orderBy === "actor" ? (
										<IconUp className="h-3 w-3" monotone />
									) : order === "desc" && orderBy === "actor" ? (
										<IconDown className="h-3 w-3" monotone />
									) : null}
								</ButtonIcon>
							</TableCell>
						</TableRow>
					</TableHead>

					<TableBody>
						{sortedData.map((row) => (
							<TableRow key={row.id}>
								<TableCell>{row.timestamp}</TableCell>
								<TableCell>{row.character}</TableCell>
								<TableCell>{row.actor}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>
		</div>
	);
};

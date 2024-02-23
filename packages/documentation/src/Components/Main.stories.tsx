import type { Story } from "@ladle/react";
import { Footer, Header, Main } from "@versini/ui-components";

export default {
	title: "Components/Main",
	meta: {
		importName: "Main",
	},
};

export const Basic: Story<any> = (args) => <Main {...args}>hello main </Main>;
Basic.args = {
	raw: false,
};

export const WithHeaderAndFooter: Story<any> = (args) => (
	<div className="h-full bg-slate-100">
		<Header {...args} className="bg-slate-500">
			<div>hello header content</div>
		</Header>

		<Main {...args} className="bg-slate-500">
			<div>hello main content</div>
		</Main>

		<Footer
			kind="light"
			className="bg-slate-500"
			row1={<div>App Name v1.0.0</div>}
			row2={<div>something something</div>}
		/>
	</div>
);

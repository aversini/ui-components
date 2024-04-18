import type { Story } from "@ladle/react";
import { Button } from "@versini/ui-components";
import { TextArea } from "@versini/ui-form";
import { ThemeProvider } from "@versini/ui-system";

export default {
	title: "System/Theme Provider",
	meta: {
		importName: "ThemeProvider",
		importPackage: "ui-system",
	},
};

const customTheme = {
	"--av-copy-light": "#403c3a",
	"--av-copy-light-hover": "white",
	"--av-copy-light-active": "white",
	"--av-copy-medium": "#403c3a",

	"--av-surface-dark": "white",

	"--av-action-light": "#ffcd41",
	"--av-action-light-hover": "#403c3a",
	"--av-action-light-active": "black",

	"--av-border-light": "#403c3a",

	"--av-focus-light": "#3e7d0e",
};

export const CustomTheme: Story<any> = (args) => (
	<ThemeProvider {...args}>
		<form noValidate>
			<TextArea
				label="some label"
				name="some-name"
				helperText="Powered by the sun"
				rightElement={
					<Button mode="light" noBorder>
						Send
					</Button>
				}
			/>
		</form>
	</ThemeProvider>
);

CustomTheme.args = {
	customTheme,
};

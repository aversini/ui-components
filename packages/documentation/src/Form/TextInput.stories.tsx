import type { Story } from "@ladle/react";
import { Button } from "@versini/ui-components";
import { TextInput } from "@versini/ui-form";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default {
	title: "Form components/TextInput",
	meta: {
		importName: "TextInput",
		importPackage: "ui-form",
	},
	args: {
		type: "text",
		label: "Type your question here",
		name: "somebody",
		disabled: false,
		helperText: "",
		raw: false,
		focusMode: "system",
		error: false,
		inputClassName: "",
		className: "",
		mode: "system",
		labelHidden: false,
	},
	argTypes: {
		mode: {
			options: ["dark", "light", "system", "alt-system"],
			control: { type: "radio" },
		},
		focusMode: {
			options: ["dark", "light", "system", "alt-system"],
			control: { type: "radio" },
		},
	},
};

export const Basic: Story<any> = (args) => (
	<div className="min-h-10">
		<form noValidate>
			<div className="flex gap-2">
				<TextInput {...args} />
			</div>
		</form>
	</div>
);

export const RightElement: Story<any> = (args) => (
	<div className="min-h-10">
		<form noValidate>
			<div className="flex gap-2">
				<TextInput {...args} />
			</div>
		</form>
	</div>
);
RightElement.args = {
	rightElement: (
		<Button mode="light" noBorder>
			Send
		</Button>
	),
	helperText: "Powered by the sun",
};

export const WithoutReactHookForm: Story<any> = (args) => {
	const [textValue, setTextValue] = useState<string>("");

	const onTextChange = (e: any) => setTextValue(e.target.value);
	const handleSubmit = (e: any) => {
		e.preventDefault();
		console.info(textValue);
	};
	const handleReset = () => setTextValue("");

	return (
		<div className="min-h-10">
			<form noValidate>
				<div className="flex gap-2">
					<TextInput {...args} onChange={onTextChange} value={textValue} />
				</div>
				<div className="mt-2 flex gap-2">
					<Button onClick={handleSubmit}>Submit</Button>
					<Button onClick={handleReset}>Reset</Button>
				</div>
			</form>
		</div>
	);
};

export const WithReactHookForm: Story<any> = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid, isDirty, isSubmitting, submitCount },
		reset,
	} = useForm({
		mode: "all",
		shouldFocusError: true,
		shouldUseNativeValidation: false,
	});

	const onSubmit = (data: any) => {
		console.info(data);
	};

	useEffect(() => {
		console.info("isValid: ", isValid);
		console.info("isDirty: ", isDirty);
		console.info("isSubmitting: ", isSubmitting);
		console.info("submitCount: ", submitCount);
		console.info("errors:", errors);
	}, [errors, isDirty, isSubmitting, isValid, submitCount]);

	return (
		<>
			<div className="min-h-10">
				{/* <form noValidate onSubmit={handleSubmit(onSubmit)}>
					<div className="flex gap-2">
						<TextInput
							{...args}
							{...register("name", { required: true })}
							label="Name"
							error={errors.name}
							helperText={errors.name && "This field is required"}
						/>
						<TextInput
							{...args}
							{...register("email", { required: true })}
							label="Email"
							error={errors.email}
							helperText={errors.email && "This field is required"}
						/>
						<TextInput
							{...args}
							{...register("phone")}
							label="Phone"
							error={errors.phone}
							type="tel"
						/>
					</div>
					<div className="mt-7 flex gap-2">
						<Button type="submit">Submit</Button>
						<Button onClick={() => reset()}>Reset</Button>
					</div>
				</form> */}
			</div>

			<div className="min-h-10">
				<form noValidate onSubmit={handleSubmit(onSubmit)}>
					<label>First name</label>
					<input
						type="text"
						{...register("name", { required: true, value: "" })}
					/>
					{errors.name && <p>This is required</p>}

					<input
						type="text"
						{...register("email", { required: true, value: "" })}
					/>
					{errors.email && <p>This is required</p>}

					<label>Phone</label>
					<input type="text" {...register("phone")} />

					<Button type="submit">Submit</Button>

					<Button
						// onClick={() => reset()}

						onClick={() =>
							reset({
								name: "",
								email: "",
							})
						}
					>
						Reset
					</Button>
				</form>
			</div>
		</>
	);
};

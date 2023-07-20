import React from "react";
import { useField } from "formik";

import { Input, InputProps } from "ui/moleculs";

type InputFormikProps = InputProps & { name: string };

export const InputFormik: React.FC<InputFormikProps> = ({ name, ...rest }) => {
	const [field, meta] = useField(name);

	return <Input {...rest} {...field} errorMessage={meta.touched ? meta.error : ""} />;
};

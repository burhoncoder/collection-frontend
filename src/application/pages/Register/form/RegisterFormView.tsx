import React from "react";
import { useFormikContext } from "formik";

import { InputFormik } from "application/containers";
import { Button } from "ui/atoms";

export const RegisterFormView = () => {
	const { isSubmitting } = useFormikContext();

	return (
		<>
			<InputFormik
				name="email"
				size="lg"
				variant="outlined"
				outerClass="mb-5 w-80"
				label="Email"
				placeholder="Enter email"
			/>
			<InputFormik
				name="login"
				size="lg"
				variant="outlined"
				outerClass="mb-5 w-80"
				label="Login"
				placeholder="Enter login"
			/>
			<InputFormik
				name="password"
				size="lg"
				variant="outlined"
				outerClass="mb-8 w-80"
				label="Password"
				placeholder="Enter password"
				type="password"
			/>
			<Button
				variant="primary"
				size="lg"
				text="Sign up"
				className="w-80 justify-center"
				type="submit"
				isLoading={isSubmitting}
			/>
		</>
	);
};

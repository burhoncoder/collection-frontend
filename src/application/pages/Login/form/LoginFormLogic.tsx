import React from "react";
import { UseMutateAsyncFunction } from "@tanstack/react-query";
import { Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";

import { Types } from "core/User";

import { LoginFormView } from "./LoginFormView.tsx";

interface LoginFormLogicProps {
	onSubmit: UseMutateAsyncFunction<void, unknown, Types.Form.ILogin, unknown>;
}

const initialValues = {
	login: "",
	password: "",
};

const validationSchema = Yup.object().shape({
	login: Yup.string().required(),
	password: Yup.string().required(),
});

export const LoginFormLogic: React.FC<LoginFormLogicProps> = ({ onSubmit }) => {
	const handleSubmit = async (
		form: Types.Form.ILogin,
		formikHelpers: FormikHelpers<Types.Form.ILogin>
	) => {
		await onSubmit(form)
			.catch(() => {})
			.finally(() => formikHelpers.setSubmitting(false));
	};

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={handleSubmit}
		>
			<Form>
				<LoginFormView />
			</Form>
		</Formik>
	);
};

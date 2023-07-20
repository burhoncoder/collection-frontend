import React from "react";
import { UseMutateAsyncFunction } from "@tanstack/react-query";
import { Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";

import { Types } from "core/User";

import { RegisterFormView } from "./RegisterFormView.tsx";

interface RegisterFormLogicProps {
	onSubmit: UseMutateAsyncFunction<any, unknown, Types.Form.IRegister, unknown>;
}

const initialValues: Types.Form.IRegister = {
	login: "",
	email: "",
	password: "",
};

const validationSchema = Yup.object().shape({
	login: Yup.string().required(),
	email: Yup.string().email().required(),
	password: Yup.string().required(),
});

export const RegisterFormLogic: React.FC<RegisterFormLogicProps> = ({ onSubmit }) => {
	const handleSubmit = async (
		form: Types.Form.IRegister,
		formikHelpers: FormikHelpers<Types.Form.IRegister>
	) => {
		await onSubmit(form)
			.catch(() => {})
			.finally(() => formikHelpers.setSubmitting(false));
	};

	return (
		<Formik
			initialValues={initialValues}
			onSubmit={handleSubmit}
			validationSchema={validationSchema}
		>
			<Form>
				<RegisterFormView />
			</Form>
		</Formik>
	);
};

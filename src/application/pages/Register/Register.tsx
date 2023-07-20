import React from "react";

import { Title } from "ui/atoms";

import { RegisterFormApi } from "./form/RegisterFormApi.tsx";

const Register = () => {
	return (
		<div className="auth-container">
			<Title as="h2" text="Register" className="mb-9 text-center" />

			<RegisterFormApi />
		</div>
	);
};

export default Register;

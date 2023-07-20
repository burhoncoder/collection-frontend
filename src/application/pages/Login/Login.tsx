import React from "react";

import { Title } from "ui/atoms";

import { LoginFormApi } from "./form/LoginFormApi.tsx";

const Register = () => {
	return (
		<div className="auth-container">
			<Title as="h2" text="Login" className="mb-9 text-center" />

			<LoginFormApi />
		</div>
	);
};

export default Register;

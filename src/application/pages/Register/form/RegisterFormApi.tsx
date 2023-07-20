import React from "react";

import { useSignUp } from "core/User";

import { RegisterFormLogic } from "./RegisterFormLogic.tsx";

export const RegisterFormApi = () => {
	const registerMutation = useSignUp();

	return <RegisterFormLogic onSubmit={registerMutation.mutateAsync} />;
};

import React from "react";

import { useSignIn } from "core/User";

import { LoginFormLogic } from "./LoginFormLogic.tsx";

export const LoginFormApi = () => {
	const loginMutation = useSignIn();

	return <LoginFormLogic onSubmit={loginMutation.mutateAsync} />;
};

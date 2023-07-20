import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

import { notifier } from "infrastructure/notifier";

import { signUp } from "../api.ts";
import * as Types from "../types.ts";

export const useSignUp = () => {
	const navigate = useNavigate();

	return useMutation(
		async (signUpForm: Types.Form.IRegister) => {
			const { data } = await signUp(signUpForm);

			return data;
		},
		{
			onSuccess: () => {
				navigate("/sign-in");
			},
			onError: () => {
				notifier.error("Something went wrong");
			},
		}
	);
};

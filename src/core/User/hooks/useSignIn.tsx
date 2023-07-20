import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

import { notifier, storage } from "infrastructure";

import { signIn } from "../api.ts";
import * as Types from "../types.ts";

export const useSignIn = () => {
	const navigate = useNavigate();

	return useMutation(
		async (userSignIn: Types.Form.ILogin) => {
			const { data } = await signIn(userSignIn);
			storage.set("token", data);
		},
		{
			onSuccess: () => {
				navigate("/");
			},
			onError: () => {
				notifier.error("Something went wrong");
			},
		}
	);
};

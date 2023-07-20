import { AxiosPromise } from "axios";

import { httpClient } from "infrastructure";

import * as Types from "./types.ts";

const endPoints = {
	signIn: "/user/sign-in",
	signUp: "/user/sign-up",
	users: "/user",
};

export const signIn = async (signInDto: Types.Form.ILogin): AxiosPromise =>
	httpClient.post(endPoints.signIn, signInDto);

export const signUp = async (signUpDto: Types.Form.IRegister): AxiosPromise =>
	httpClient.post(endPoints.signUp, signUpDto);

export const getList = async (): AxiosPromise => httpClient.get(endPoints.users);

import { Types } from "core/User";

import { authActions } from "./index";

interface IAction {
	type: string;
	payload?: Types.Entity.IUser;
}

export const reducer = (
	state: Types.Entity.IUser | null = null,
	action: IAction
): Types.Entity.IUser | null | undefined => {
	const { type, payload } = action;

	switch (type) {
		case authActions.SIGN_IN:
			return payload;

		case authActions.SIGN_OUT:
			return null;

		default:
			return state;
	}
};

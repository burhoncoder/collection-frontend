import { get, isArray } from "lodash";

import * as Types from "./types.ts";

export const mapList = (res: any): Types.Entity.IUser[] => {
	if (isArray(res)) {
		return res.map((item) => ({
			id: get(item, "id"),
			email: get(item, "email", ""),
			username: get(item, "username", ""),
			role: get(item, "role", ""),
		}));
	} else return [];
};

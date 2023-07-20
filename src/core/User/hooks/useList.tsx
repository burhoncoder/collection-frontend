import { useQuery } from "@tanstack/react-query";

import { getList } from "core/User/api.ts";
import { mapList } from "core/User/mapper.ts";

import * as Types from "../types.ts";

export const useList = () => {
	return useQuery({
		queryKey: [Types.Api.LIST],
		queryFn: async () => {
			const { data } = await getList();
			return mapList(data);
		},
	});
};

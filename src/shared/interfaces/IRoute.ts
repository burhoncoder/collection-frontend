import * as React from "react";

export interface IRoute {
	index?: boolean;
	path?: string;
	element: React.ReactNode;
}

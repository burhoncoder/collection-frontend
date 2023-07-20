import * as React from "react";
import { LazyExoticComponent } from "react";

export interface IRoute {
	layout: React.ReactNode;
	path: string;
	children: IRouteChild[];
}

interface IRouteChild {
	index?: boolean;
	path?: string;
	element: LazyExoticComponent<() => React.ReactNode>;
}

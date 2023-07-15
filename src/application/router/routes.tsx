import React, { lazy } from "react";

import { IRoute } from "shared/interfaces/IRoute";

const Home = lazy(() => import("application/pages/Home/Home"));

export const routes: IRoute[] = [
	{
		index: true,
		element: <Home />,
	},
];

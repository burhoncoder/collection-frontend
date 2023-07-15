import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { routes } from "application/router/routes.tsx";
import { Layout } from "ui/template";

export const AppRouter = () => {
	return (
		<Suspense fallback={<div></div>}>
			<Routes>
				<Route path="/" element={<Layout />}>
					{routes.map((route, idx) => (
						<Route
							key={idx}
							index={route.index}
							path={route.path}
							element={<Suspense fallback={<div></div>}>{route.element}</Suspense>}
						></Route>
					))}
				</Route>
			</Routes>
		</Suspense>
	);
};

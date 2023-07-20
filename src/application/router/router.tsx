import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { routes } from "application/router/routes.tsx";

export const AppRouter = () => {
	return (
		<Routes>
			{routes.map((route, idx) => (
				<Route key={idx} path={route.path} element={route.layout}>
					{route.children.map((ChildRoute, idx) => (
						<Route
							key={idx}
							index={ChildRoute.index}
							path={ChildRoute.path}
							element={
								<>
									<Suspense fallback={<div></div>}>
										<ChildRoute.element />
									</Suspense>
								</>
							}
						></Route>
					))}
				</Route>
			))}
		</Routes>
	);
};

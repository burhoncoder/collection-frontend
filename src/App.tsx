import React from "react";
import { ToastContainer } from "react-toastify";

import { AppRouter } from "application/router";

export const App = () => {
	return (
		<>
			<ToastContainer containerId="root" autoClose={2000} limit={1} />
			<AppRouter />
		</>
	);
};

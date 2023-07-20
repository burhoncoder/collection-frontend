import React from "react";
import { Outlet } from "react-router-dom";

import "./Auth.scss";

export const Auth = () => {
	return (
		<div className="auth-layout">
			<Outlet />
		</div>
	);
};

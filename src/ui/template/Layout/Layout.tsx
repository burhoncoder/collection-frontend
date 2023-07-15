import React from "react";
import { Outlet } from "react-router-dom";

import { Header, Sidebar } from "ui/organisms";

import "./Layout.scss";

export const Layout = () => {
	return (
		<>
			<Sidebar />
			<Header />
			<main className="page-content">
				<Outlet />
			</main>
		</>
	);
};

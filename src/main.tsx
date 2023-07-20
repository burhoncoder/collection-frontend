import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { SkeletonTheme } from "react-loading-skeleton";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { initI18n } from "infrastructure";

import store from "application/store";

import { App } from "./App.tsx";

import "assets/styles/main.scss";

const queryClient = new QueryClient({
	logger: {
		log: () => {},
		error: () => {},
		warn: () => {},
	},
});

initI18n();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<Router>
		<Provider store={store}>
			<SkeletonTheme baseColor="#e6edf5" highlightColor="#ecf3ff" duration={1}>
				<QueryClientProvider client={queryClient}>
					<App />
				</QueryClientProvider>
			</SkeletonTheme>
		</Provider>
	</Router>
);

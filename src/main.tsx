import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom/client";

import { App } from "./App.tsx";

import "assets/styles/main.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<Router>
		<App />
	</Router>
);

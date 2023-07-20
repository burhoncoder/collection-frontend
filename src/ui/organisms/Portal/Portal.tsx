import React from "react";
import { createPortal } from "react-dom";

import { PortalProps } from "./Portal.types";

export const Portal: React.FC<PortalProps> = ({ selector, children }) => {
	const container = document.getElementById(selector) as HTMLElement;

	return createPortal(children, container);
};

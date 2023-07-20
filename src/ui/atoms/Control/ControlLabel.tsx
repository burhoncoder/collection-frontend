import React from "react";

import { Text } from "../Text/Text.tsx";

import { ControlLabelProps } from "./Control.types";

export const ControlLabel: React.FC<ControlLabelProps> = ({ label }) => {
	return label ? (
		<Text as="span" text={label} weight="bold" size="md" className="control-label" />
	) : null;
};

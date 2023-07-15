import React from "react";

export type ButtonProps = {
	variant?: "primary" | "outlined" | "danger";
	size?: "lg" | "md" | "sm";
	text?: string;
	isDisabled?: boolean;
	isLoading?: boolean;
	roundness?: "half" | "full";
	link?: string;
} & Omit<React.ComponentPropsWithoutRef<"button">, "disabled">;

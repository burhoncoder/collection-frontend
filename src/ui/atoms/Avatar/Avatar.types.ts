import React from "react";

export interface AvatarProps extends React.HTMLAttributes<HTMLImageElement> {
	src?: string;
	size: "sm" | "lg" | "md";
	isRounded?: boolean;
}

import React from "react";
import cn from "classnames";

import { AvatarProps } from "./Avatar.types";

import DefaultImg from "assets/images/default.jpg";

import "./Avatar.scss";

export const Avatar: React.FC<AvatarProps> = ({
	size,
	isRounded = true,
	src,
	className,
	...restProps
}) => {
	return (
		<img
			{...restProps}
			src={src || DefaultImg}
			className={cn(
				"avatar",
				`avatar_${size}`,
				{
					radius_full: isRounded,
				},
				className
			)}
		/>
	);
};

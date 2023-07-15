import React from "react";
import cn from "classnames";

import { TagProps } from "./Tag.types.ts";

import "./Tag.scss";

export const Tag: React.FC<TagProps> = ({ name, isActive, className }) => {
	return (
		<div
			className={cn("tag", className, {
				tag_active: isActive,
			})}
		>
			{name}
		</div>
	);
};

import React from "react";
import cn from "classnames";

import { Icon } from "ui/atoms";

import { ItemCountProps } from "./ItemCount.types.ts";

import "./ItemCount.scss";

export const ItemCount: React.FC<ItemCountProps> = ({ count, className, ...restProps }) => {
	return (
		<div className={cn("item-count", className)} {...restProps}>
			<Icon icon="item-count" className="mr-1" />
			{count}
		</div>
	);
};

import React from "react";

import { Avatar, Text } from "ui/atoms";

import { SidebarCollectionProps } from "./SidebarCollection.types.ts";

import "./SidebarCollection.scss";

export const SidebarCollection: React.FC<SidebarCollectionProps> = ({
	name,
	imgSrc,
	itemCount,
}) => {
	return (
		<div className="last-collection">
			<div className="flex items-center">
				<Avatar size="sm" src={imgSrc} isRounded={true} className="mr-3" />
				<Text as="span" text={name} weight="semi-bold" size="sm" />
			</div>

			<div className="last-collection__items">{itemCount}</div>
		</div>
	);
};

import React from "react";

import { Tag, Title } from "ui/atoms";
import { ItemCardProps } from "ui/moleculs";

import "./ItemCard.scss";

export const ItemCard: React.FC<ItemCardProps> = ({ name, tags = [] }) => {
	return (
		<div className="item-card">
			<Title as="h4" text={name} className="mb-5" />

			<div className="flex flex-wrap gap-4">
				{tags.map((tag, idx) => (
					<Tag key={idx} name={tag.name} isActive={true} />
				))}
			</div>
		</div>
	);
};

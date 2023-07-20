import React from "react";

import { Title } from "ui/atoms";
import { ItemCard } from "ui/moleculs";

import { ItemsGridProps } from "./ItemsGrid.types.ts";

export const ItemsGrid: React.FC<ItemsGridProps> = ({ items = [] }) => {
	return (
		<div className="section-padding">
			<div className="section-heading">
				<Title as="h3" text="Items" className="section-title" />
			</div>

			<div className="grid grid-cols-3 gap-8">
				{items.map((item, idx) => (
					<ItemCard key={idx} name={item.name} tags={item.tags} />
				))}
			</div>
		</div>
	);
};

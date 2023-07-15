import React from "react";

import { Button, Title } from "ui/atoms";
import { ItemCount } from "ui/moleculs";
import { CollectionSliderProps } from "ui/moleculs/CollectionSlider/CollectionSlider.types.ts";

import "./CollectionSlider.scss";

export const CollectionSlider: React.FC<CollectionSliderProps> = ({
	link,
	name,
	imgSrc,
	itemCount,
}) => {
	return (
		<div className="collection-slider" style={{ backgroundImage: `url("${imgSrc}")` }}>
			<div className="container">
				<div className="py-[11%]">
					<ItemCount count={itemCount} className="mb-16" />
					<Title as="h2" text={name} className="mb-5 text-white" />
					<Button text="View" size="lg" variant="primary" link={link} />
				</div>
			</div>
		</div>
	);
};

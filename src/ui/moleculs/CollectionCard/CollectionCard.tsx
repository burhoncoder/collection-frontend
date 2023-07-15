import React from "react";

import { Text, Title } from "ui/atoms";
import { CollectionCardProps, ItemCount } from "ui/moleculs";

import DefaultImg from "assets/images/default.jpg";

import "./CollectionCard.scss";

export const CollectionCard: React.FC<CollectionCardProps> = ({
	imgSrc,
	name,
	itemCount,
	author,
}) => {
	return (
		<div className="collection-card">
			<div className="collection-card__img">
				<img src={imgSrc || DefaultImg} alt="" />
				<ItemCount count={itemCount} className="collection-card__count" />
			</div>
			<Text as="p" text={author} className="collection-card__author" />

			<Title as="h6" text={name} className="collection-card__name" />
		</div>
	);
};

import React from "react";

import { Text, Title } from "ui/atoms";

import { ItemFieldsProps } from "./ItemFields.types.ts";

import "./ItemFields.scss";

export const ItemFields: React.FC<ItemFieldsProps> = ({ fields }) => {
	return (
		<div>
			{fields.map((field, idx) => (
				<div key={idx} className="item-field">
					<Title as="h4" text={`${field.name}:`} className="font-medium" />
					<Text as="p" text={`${field.value}:`} size="xlg" weight="medium" />
				</div>
			))}
		</div>
	);
};

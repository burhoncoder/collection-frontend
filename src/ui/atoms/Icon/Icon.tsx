import React from "react";

import { IconProps, IconType } from "./Icon.types";

import { ReactComponent as Collection } from "assets/icons/collection.svg";
import { ReactComponent as Home } from "assets/icons/home.svg";
import { ReactComponent as ItemCount } from "assets/icons/item-count.svg";
import { ReactComponent as Tag } from "assets/icons/tag.svg";
import { ReactComponent as User } from "assets/icons/user.svg";

const icons: IconType = {
	home: Home,
	collection: Collection,
	tag: Tag,
	user: User,
	"item-count": ItemCount,
};

export const Icon: React.FC<IconProps> = ({ icon, ...restProps }) => {
	const SVG = icons[icon];

	return <SVG {...restProps} />;
};

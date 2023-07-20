import React from "react";

import { IconProps, IconType } from "./Icon.types";

import { ReactComponent as ArrowLeft } from "assets/icons/arrow-left.svg";
import { ReactComponent as ArrowRight } from "assets/icons/arrow-right.svg";
import { ReactComponent as Calendar } from "assets/icons/calendar.svg";
import { ReactComponent as Collection } from "assets/icons/collection.svg";
import { ReactComponent as Dislike } from "assets/icons/dislike.svg";
import { ReactComponent as Home } from "assets/icons/home.svg";
import { ReactComponent as ItemCount } from "assets/icons/item-count.svg";
import { ReactComponent as Like } from "assets/icons/like.svg";
import { ReactComponent as NoData } from "assets/icons/no-data.svg";
import { ReactComponent as OverlayClose } from "assets/icons/overlay-close.svg";
import { ReactComponent as Tag } from "assets/icons/tag.svg";
import { ReactComponent as User } from "assets/icons/user.svg";

const icons: IconType = {
	home: Home,
	collection: Collection,
	tag: Tag,
	user: User,
	"item-count": ItemCount,
	"arrow-right": ArrowRight,
	"arrow-left": ArrowLeft,
	like: Like,
	dislike: Dislike,
	calendar: Calendar,
	"overlay-close": OverlayClose,
	"no-data": NoData,
};

export const Icon: React.FC<IconProps> = ({ icon, ...restProps }) => {
	const SVG = icons[icon];

	return <SVG {...restProps} />;
};

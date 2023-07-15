import React from "react";
import { NavLink } from "react-router-dom";
import cn from "classnames";

import { Icon } from "ui/atoms";

import { SidebarLinkProps } from "./SidebarLink.types.ts";

import "./SidebarLink.scss";

export const SidebarLink: React.FC<SidebarLinkProps> = ({ iconName, link, title }) => {
	return (
		<NavLink
			to={link}
			className={({ isActive }) => cn("sidebar__link", { sidebar__link_active: isActive })}
		>
			<Icon icon={iconName} className="mr-5" />
			{title}
		</NavLink>
	);
};

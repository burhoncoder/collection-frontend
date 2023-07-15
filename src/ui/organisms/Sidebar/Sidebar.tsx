import React from "react";

import { Logo, Text } from "ui/atoms";
import { SidebarCollection, SidebarLink } from "ui/moleculs";

import "./Sidebar.scss";

export const Sidebar = () => {
	return (
		<div className="sidebar">
			<Logo />
			<div className="sidebar__menu">
				<Text as="p" text="Menu" className="sidebar__subtitle" />
				<SidebarLink iconName="home" link="/" title="Home" />
				<SidebarLink iconName="collection" link="/collection" title="My collection" />
				<SidebarLink iconName="tag" link="/tag" title="Tags" />
				<SidebarLink iconName="user" link="/rights" title="Manage rights" />
			</div>

			<div className="sidebar__collections">
				<Text as="p" text="Last collections" className="sidebar__subtitle" />
				<SidebarCollection
					imgSrc="https://o.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/1062x597/format/jpg/quality/100/https://s.aolcdn.com/os/ab/_cms/2022/02/07162509/Best-electric-car-collage-22.jpg"
					itemCount={12}
					name="Cars"
				/>
				<SidebarCollection
					imgSrc="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/complete-buying-guide-to-tudor-watches-refresh-lead-1668018363.jpg?resize=640:*"
					itemCount={7}
					name="Wathces"
				/>
				<SidebarCollection
					imgSrc="https://thumbs.dreamstime.com/b/assorted-sports-balls-black-background-11556866.jpg"
					itemCount={3}
					name="Balls"
				/>
			</div>
		</div>
	);
};

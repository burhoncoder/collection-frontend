import { SVGProps } from "react";

export interface IconProps extends SVGProps<SVGElement> {
	icon: IconNames;
}

export type IconType = Record<IconNames, any>;

export type IconNames = "home" | "collection" | "tag" | "user" | "item-count";

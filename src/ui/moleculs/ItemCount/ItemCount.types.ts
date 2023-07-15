import { HTMLProps } from "react";

export interface ItemCountProps extends HTMLProps<HTMLDivElement> {
	count: string | number;
}

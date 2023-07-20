import React from "react";

export interface ModalProps {
	isOpen: boolean;
	onClose: Function;
	children: React.ReactNode;
}

export interface AppModalProps {
	isOpen: boolean;
	children: React.ReactNode;
	title: string;
	subtitle: string;
	onClose: React.MouseEventHandler;
}

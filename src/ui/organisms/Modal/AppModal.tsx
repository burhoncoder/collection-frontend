import React from "react";

import { Button, Icon, Text, Title } from "ui/atoms";

import { Modal } from "./Modal";
import { AppModalProps } from "./Modal.types";

export const AppModal: React.FC<AppModalProps> = ({
	isOpen,
	title,
	subtitle,
	onClose,
	children,
}) => {
	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<Button
				variant="filled"
				size="icon"
				onClick={onClose}
				className="modal__close"
				roundness={false}
			>
				<Icon icon="overlay-close" />
			</Button>

			<Title as="h3" text={title} className="app-modal__title mb-9 text-center" />

			<Text
				as="p"
				text={subtitle}
				size="xlg"
				weight="medium"
				className="app-modal__subtitle mb-9 text-center"
			/>

			{children}
		</Modal>
	);
};

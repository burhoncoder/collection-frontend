import React, { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { constants } from "shared";

import { Portal } from "ui/organisms";

import { ModalProps } from "./Modal.types";

import "./Modal.scss";

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
	const modalContent = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const handleESCPress = (event: KeyboardEvent) => {
			if (event.key === constants.KEY_ESC) {
				onClose();
			}
		};

		window.addEventListener("keyup", handleESCPress);
		return () => {
			window.removeEventListener("keyup", handleESCPress);
		};
	}, []);

	const handleFocusTrap: React.KeyboardEventHandler<HTMLElement> = (event) => {
		const focusableElements:
			| NodeListOf<
					HTMLInputElement | HTMLButtonElement | HTMLTextAreaElement | HTMLSelectElement
			  >
			| undefined = modalContent.current?.querySelectorAll(
			"a[href], button, textarea, input, select"
		);
		const firstElement = focusableElements && focusableElements[0];
		const lastElement = focusableElements && focusableElements[focusableElements.length - 1];

		if (event.key === constants.KEY_TAB) {
			if (event.shiftKey) {
				if (document.activeElement === firstElement && lastElement) {
					lastElement.focus();
					event.preventDefault();
				}
			} else {
				if (document.activeElement === lastElement && firstElement) {
					firstElement.focus();
					event.preventDefault();
				}
			}
		}
	};

	return (
		<Portal selector="root">
			<AnimatePresence>
				{isOpen && (
					<motion.div
						className="modal"
						transition={{ duration: 0.2, stiffness: 10, damping: 20 }}
						initial={{ opacity: 0 }}
						animate={isOpen && { opacity: 1 }}
						exit={{ opacity: 0 }}
					>
						<div
							className="modal__overlay"
							onClick={() => {
								onClose();
							}}
						></div>
						<motion.div
							className="modal__content"
							ref={modalContent}
							transition={{ duration: 0.2, stiffness: 10, damping: 20 }}
							initial={{ translateY: "-100px" }}
							animate={isOpen && { translateY: 0 }}
							exit={{ translateY: "-100px" }}
							onKeyDown={handleFocusTrap}
						>
							{children}
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</Portal>
	);
};

import React from "react";
import { AnimatePresence, motion } from "framer-motion";

import { Text } from "../Text/Text.tsx";

import { ControlErrorProps } from "./Control.types";

export const ControlError: React.FC<ControlErrorProps> = ({ errorMessage }) => {
	return (
		<AnimatePresence>
			{!!errorMessage && (
				<motion.div
					className="control-error"
					transition={{ duration: 0.2, stiffness: 10, damping: 20 }}
					initial={{ opacity: 0 }}
					animate={!!errorMessage && { opacity: 1 }}
					exit={{ opacity: 0 }}
				>
					<Text as="span" text={errorMessage} weight="bold" size="xsm" />
				</motion.div>
			)}
		</AnimatePresence>
	);
};

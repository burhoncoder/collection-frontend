import React from "react";

import { Icon, Text } from "ui/atoms";

interface NoDataProps {
	noDataText?: string;
}

export const NoData: React.FC<NoDataProps> = ({ noDataText = "Empty" }) => {
	return (
		<div className="app-table__no-data">
			<Icon icon="no-data" className="margin" />
			{noDataText && (
				<Text
					as="p"
					text={noDataText}
					weight="bold"
					size="xlg"
					className="mt-6 max-w-6xl text-center"
				/>
			)}
		</div>
	);
};

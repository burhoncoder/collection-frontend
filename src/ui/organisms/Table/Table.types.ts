import React from "react";

export interface TableProps<TItem> {
	rowKey: keyof TItem;
	items: TItem[] | undefined;
	isLoading?: boolean;
	emptyUiText?: string;
	columns: Array<{
		title: string;
		dataKey: keyof TItem;
		render: (values: TItem) => React.ReactNode;
	}>;
}

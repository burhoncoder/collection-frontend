import React from "react";
import { isEmpty } from "lodash";

import { NoData } from "./NoData";
import { TableProps } from "./Table.types";
import { TableSkeleton } from "./TableSkeleton.tsx";

import "./Table.scss";

export function Table<Type>({
	columns,
	rowKey,
	items = [],
	emptyUiText,
	isLoading,
}: TableProps<Type>) {
	return (
		<div className="app-table-wrapper">
			{isEmpty(items) && !isLoading ? (
				<NoData noDataText={emptyUiText} />
			) : (
				<table className="app-table" cellSpacing={0}>
					<thead className="table__head">
						<tr>
							{columns.map((col, index) => (
								<th key={index} className="table__th">
									{col.title}
								</th>
							))}
						</tr>
					</thead>

					<tbody className="table__body">
						{isLoading ? (
							<TableSkeleton count={columns.length} />
						) : (
							items.map((row) => (
								<tr className="table__body-tr" key={row[rowKey] as number}>
									{columns.map((col, innerIndex) => {
										return (
											<td key={innerIndex} className="table__td">
												{col.render(row)}
											</td>
										);
									})}
								</tr>
							))
						)}
					</tbody>
				</table>
			)}
		</div>
	);
}

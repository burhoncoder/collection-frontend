import React from "react";
import Skeleton from "react-loading-skeleton";

interface TableSkeletonProps {
	count: number;
}

export const TableSkeleton: React.FC<TableSkeletonProps> = ({ count }) => {
	const lastIndex = count - 1;

	return (
		<>
			{Array(3)
				.fill(1)
				.map((_, outerIndex) => (
					<tr key={outerIndex} className="table__body-tr">
						{Array(count)
							.fill(1)
							.map((_, index) => {
								return (
									<td
										key={index}
										className={`table__td ${
											index === lastIndex ? "w-0.5" : ""
										}`}
									>
										{lastIndex !== index && (
											<Skeleton count={1} width="60%" height="25px" />
										)}
									</td>
								);
							})}
					</tr>
				))}
		</>
	);
};

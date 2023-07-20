import React from "react";
import ReactPaginate from "react-paginate";

import { Button, Icon } from "ui/atoms";

import { PaginationProps } from "./Pagination.types";

import "./Pagination.scss";

export const Pagination: React.FC<PaginationProps> = ({
	pageCount,
	onPageChange,
	currentPage,
	className = "mt-10",
}) => {
	return (
		<div className={className}>
			<ReactPaginate
				pageCount={pageCount}
				initialPage={currentPage}
				disableInitialCallback={true}
				previousLabel={
					<Button className="pagination__control">
						<Icon icon="arrow-left" />
					</Button>
				}
				nextLabel={
					<Button className="pagination__control">
						<Icon icon="arrow-right" />
					</Button>
				}
				containerClassName="pagination"
				pageLinkClassName="pagination__link"
				activeLinkClassName="pagination__link_active"
				breakLinkClassName="pagination__link"
				marginPagesDisplayed={3}
				pageRangeDisplayed={3}
				onPageChange={(data) => onPageChange(data.selected)}
			/>
		</div>
	);
};

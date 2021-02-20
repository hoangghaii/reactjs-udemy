// import paginator from "paginator";
// import PropTypes from "prop-types";
// import React from "react";
// import PaginationItem from "./PaginationItem/PaginationItem";

// function Pagination(props) {
// 	const {
// 		totalItemsCount,
// 		onChange,
// 		activePage,
// 		itemsCountPerPage,
// 		pageRangeDisplayed,
// 		prevPageText,
// 		nextPageText,
// 		lastPageText,
// 		firstPageText,
// 		disabledClass,
// 		hideDisabled,
// 		hideNavigation,
// 		innerClass,
// 		itemClass,
// 		itemClassFirst,
// 		itemClassPrev,
// 		itemClassNext,
// 		itemClassLast,
// 		linkClass,
// 		activeClass,
// 		activeLinkClass,
// 		linkClassFirst,
// 		linkClassPrev,
// 		linkClassNext,
// 		linkClassLast,
// 		hideFirstLastPages,
// 		getPageUrl,
// 	} = props;

// 	const isFirstPageVisible = (has_previous_page) => {
// 		if (hideFirstLastPages || (hideDisabled && !has_previous_page))
// 			return false;
// 		return true;
// 	};

// 	const isPrevPageVisible = (has_previous_page) => {
// 		if (hideNavigation || (hideDisabled && !has_previous_page))
// 			return false;
// 		return true;
// 	};

// 	const isNextPageVisible = (has_next_page) => {
// 		if (hideNavigation || (hideDisabled && !has_next_page)) return false;
// 		return true;
// 	};

// 	const isLastPageVisible = (has_next_page) => {
// 		if (hideFirstLastPages || (hideDisabled && !has_next_page))
// 			return false;
// 		return true;
// 	};

// 	const buildPages = () => {
// 		const pages = [];

// 		const paginationInfo = new paginator(
// 			itemsCountPerPage,
// 			pageRangeDisplayed
// 		).build(totalItemsCount, activePage);

// 		for (
// 			let i = paginationInfo.first_page;
// 			i <= paginationInfo.last_page;
// 			i++
// 		) {
// 			pages.push(
// 				<PaginationItem
// 					isActive={i === activePage}
// 					key={i}
// 					href={getPageUrl(i)}
// 					pageNumber={i}
// 					pageText={i + ""}
// 					onClick={onChange}
// 					itemClass={itemClass}
// 					linkClass={linkClass}
// 					activeClass={activeClass}
// 					activeLinkClass={activeLinkClass}
// 					ariaLabel={`Go to page number ${i}`}
// 				/>
// 			);
// 		}

// 		isPrevPageVisible(paginationInfo.has_previous_page) &&
// 			pages.unshift(
// 				<PaginationItem
// 					key={"prev" + paginationInfo.previous_page}
// 					href={getPageUrl(paginationInfo.previous_page)}
// 					pageNumber={paginationInfo.previous_page}
// 					onClick={onChange}
// 					pageText={prevPageText}
// 					isDisabled={!paginationInfo.has_previous_page}
// 					itemClass={itemClass}
// 					linkClass={linkClass}
// 					disabledClass={disabledClass}
// 					ariaLabel="Go to previous page"
// 				/>
// 			);

// 		isFirstPageVisible(paginationInfo.has_previous_page) &&
// 			pages.unshift(
// 				<PaginationItem
// 					key={"first"}
// 					href={getPageUrl(1)}
// 					pageNumber={1}
// 					onClick={onChange}
// 					pageText={firstPageText}
// 					isDisabled={!paginationInfo.has_previous_page}
// 					itemClass={itemClass}
// 					linkClass={linkClass}
// 					disabledClass={disabledClass}
// 					ariaLabel="Go to first page"
// 				/>
// 			);

// 		isNextPageVisible(paginationInfo.has_next_page) &&
// 			pages.push(
// 				<PaginationItem
// 					key={"next" + paginationInfo.next_page}
// 					href={getPageUrl(paginationInfo.next_page)}
// 					pageNumber={paginationInfo.next_page}
// 					onClick={onChange}
// 					pageText={nextPageText}
// 					isDisabled={!paginationInfo.has_next_page}
// 					itemClass={itemClass}
// 					linkClass={linkClass}
// 					disabledClass={disabledClass}
// 					ariaLabel="Go to next page"
// 				/>
// 			);

// 		isLastPageVisible(paginationInfo.has_next_page) &&
// 			pages.push(
// 				<PaginationItem
// 					key={"last"}
// 					href={getPageUrl(paginationInfo.total_pages)}
// 					pageNumber={paginationInfo.total_pages}
// 					onClick={onChange}
// 					pageText={lastPageText}
// 					isDisabled={
// 						paginationInfo.current_page ===
// 						paginationInfo.total_pages
// 					}
// 					itemClass={itemClass}
// 					linkClass={linkClass}
// 					disabledClass={disabledClass}
// 					ariaLabel="Go to last page"
// 				/>
// 			);

// 		return pages;
// 	};

// 	const pages = buildPages();

// 	return <div className="flex h-8 font-medium">{pages}</div>;
// }

// Pagination.propTypes = {
// 	totalItemsCount: PropTypes.number.isRequired,
// 	onChange: PropTypes.func.isRequired,
// 	activePage: PropTypes.number,
// 	itemsCountPerPage: PropTypes.number,
// 	pageRangeDisplayed: PropTypes.number,
// 	prevPageText: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
// 	nextPageText: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
// 	lastPageText: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
// 	firstPageText: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
// 	disabledClass: PropTypes.string,
// 	hideDisabled: PropTypes.bool,
// 	hideNavigation: PropTypes.bool,
// 	innerClass: PropTypes.string,
// 	itemClass: PropTypes.string,
// 	itemClassFirst: PropTypes.string,
// 	itemClassPrev: PropTypes.string,
// 	itemClassNext: PropTypes.string,
// 	itemClassLast: PropTypes.string,
// 	linkClass: PropTypes.string,
// 	activeClass: PropTypes.string,
// 	activeLinkClass: PropTypes.string,
// 	linkClassFirst: PropTypes.string,
// 	linkClassPrev: PropTypes.string,
// 	linkClassNext: PropTypes.string,
// 	linkClassLast: PropTypes.string,
// 	hideFirstLastPages: PropTypes.bool,
// 	getPageUrl: PropTypes.func,
// };

// Pagination.defaultProps = {
// 	itemsCountPerPage: 10,
// 	pageRangeDisplayed: 5,
// 	activePage: 1,
// 	prevPageText: "⟨",
// 	firstPageText: "«",
// 	nextPageText: "⟩",
// 	lastPageText: "»",
// 	innerClass: "pagination",
// 	itemClass: "h-8 w-8 mr-1 flex justify-center items-center cursor-pointer",
// 	linkClass: undefined,
// 	activeLinkClass: undefined,
// 	disabledClass: "",
// 	hideFirstLastPages: false,
// 	getPageUrl: (i) => "#",
// };

// export default Pagination;

import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

const LEFT_PAGE = "LEFT";
const RIGHT_PAGE = "RIGHT";

/**
 * Helper method for creating a range of numbers
 * range(1, 5) => [1, 2, 3, 4, 5]
 */
const range = (from, to, step = 1) => {
	let i = from;
	const range = [];

	while (i <= to) {
		range.push(i);
		i += step;
	}

	return range;
};

class Pagination extends Component {
	constructor(props) {
		super(props);
		const {
			totalRecords = null,
			pageLimit = 30,
			pageNeighbours = 0,
		} = props;

		this.pageLimit = typeof pageLimit === "number" ? pageLimit : 30;
		this.totalRecords = typeof totalRecords === "number" ? totalRecords : 0;

		// pageNeighbours can be: 0, 1 or 2
		this.pageNeighbours =
			typeof pageNeighbours === "number"
				? Math.max(0, Math.min(pageNeighbours, 2))
				: 0;

		this.totalPages = Math.ceil(this.totalRecords / this.pageLimit);

		this.state = { currentPage: 1 };
	}

	componentDidMount() {
		this.gotoPage(1);
	}

	gotoPage = (page) => {
		const { onPageChanged = (f) => f } = this.props;
		const currentPage = Math.max(0, Math.min(page, this.totalPages));
		const paginationData = {
			currentPage,
			totalPages: this.totalPages,
			pageLimit: this.pageLimit,
			totalRecords: this.totalRecords,
		};

		this.setState({ currentPage }, () => onPageChanged(paginationData));
	};

	handleClick = (page) => (evt) => {
		evt.preventDefault();
		this.gotoPage(page);
	};

	handleMoveLeft = (evt) => {
		evt.preventDefault();
		this.gotoPage(this.state.currentPage - this.pageNeighbours * 2 - 1);
	};

	handleMoveRight = (evt) => {
		evt.preventDefault();
		this.gotoPage(this.state.currentPage + this.pageNeighbours * 2 + 1);
	};

	fetchPageNumbers = () => {
		const totalPages = this.totalPages;
		const currentPage = this.state.currentPage;
		const pageNeighbours = this.pageNeighbours;

		/**
		 * totalNumbers: the total page numbers to show on the control
		 * totalBlocks: totalNumbers + 2 to cover for the left(<) and right(>) controls
		 */
		const totalNumbers = this.pageNeighbours * 2 + 3;
		const totalBlocks = totalNumbers + 2;

		if (totalPages > totalBlocks) {
			const startPage = Math.max(2, currentPage - pageNeighbours);
			const endPage = Math.min(
				totalPages - 1,
				currentPage + pageNeighbours
			);
			let pages = range(startPage, endPage);

			/**
			 * hasLeftSpill: has hidden pages to the left
			 * hasRightSpill: has hidden pages to the right
			 * spillOffset: number of hidden pages either to the left or to the right
			 */
			const hasLeftSpill = startPage > 2;
			const hasRightSpill = totalPages - endPage > 1;
			const spillOffset = totalNumbers - (pages.length + 1);

			switch (true) {
				// handle: (1) < {5 6} [7] {8 9} (10)
				case hasLeftSpill && !hasRightSpill: {
					const extraPages = range(
						startPage - spillOffset,
						startPage - 1
					);
					pages = [LEFT_PAGE, ...extraPages, ...pages];
					break;
				}

				// handle: (1) {2 3} [4] {5 6} > (10)
				case !hasLeftSpill && hasRightSpill: {
					const extraPages = range(
						endPage + 1,
						endPage + spillOffset
					);
					pages = [...pages, ...extraPages, RIGHT_PAGE];
					break;
				}

				// handle: (1) < {4 5} [6] {7 8} > (10)
				case hasLeftSpill && hasRightSpill:
				default: {
					pages = [LEFT_PAGE, ...pages, RIGHT_PAGE];
					break;
				}
			}

			return [1, ...pages, totalPages];
		}

		return range(1, totalPages);
	};

	render() {
		if (!this.totalRecords || this.totalPages === 1) return null;

		const { currentPage } = this.state;
		const pages = this.fetchPageNumbers();

		return (
			<Fragment>
				<nav aria-label="Countries Pagination">
					<ul className="pagination">
						{pages.map((page, index) => {
							if (page === LEFT_PAGE)
								return (
									<li key={index} className="page-item">
										<a
											className="page-link"
											href="#"
											aria-label="Previous"
											onClick={this.handleMoveLeft}
										>
											<span aria-hidden="true">
												&laquo;
											</span>
											<span className="sr-only">
												Previous
											</span>
										</a>
									</li>
								);

							if (page === RIGHT_PAGE)
								return (
									<li key={index} className="page-item">
										<a
											className="page-link"
											href="#"
											aria-label="Next"
											onClick={this.handleMoveRight}
										>
											<span aria-hidden="true">
												&raquo;
											</span>
											<span className="sr-only">
												Next
											</span>
										</a>
									</li>
								);

							return (
								<li
									key={index}
									className={`page-item${
										currentPage === page ? " active" : ""
									}`}
								>
									<a
										className="page-link"
										href="#"
										onClick={this.handleClick(page)}
									>
										{page}
									</a>
								</li>
							);
						})}
					</ul>
				</nav>
			</Fragment>
		);
	}
}

Pagination.propTypes = {
	totalRecords: PropTypes.number.isRequired,
	pageLimit: PropTypes.number,
	pageNeighbours: PropTypes.number,
	onPageChanged: PropTypes.func,
};

export default Pagination;

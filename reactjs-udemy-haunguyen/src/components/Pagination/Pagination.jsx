import PropTypes from "prop-types";
import React, { Component } from "react";

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
			pageNeighbours = 1,
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
			<div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
				<div className="flex-1 flex justify-between sm:hidden">
					<span
						aria-label="Previous"
						onClick={this.handleMoveLeft}
						className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 cursor-pointer"
					>
						Previous
					</span>
					<span
						aria-label="Next"
						onClick={this.handleMoveRight}
						className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 cursor-pointer"
					>
						Next
					</span>
				</div>
				<div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
					<div>
						<p className="text-sm text-gray-700">
							Showing
							<span className="font-medium"> 1 </span>
							to
							<span className="font-medium"> 10 </span>
							of
							<span className="font-medium">
								{" "}
								{this.totalRecords}{" "}
							</span>
							results
						</p>
					</div>
				</div>
				<div>
					<nav
						className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
						aria-label="Pagination"
					>
						{pages.map((page, index) => {
							if (page === LEFT_PAGE)
								return (
									<span
										key={index}
										aria-label="Previous"
										onClick={this.handleMoveLeft}
										className="relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 cursor-pointer"
									>
										<span className="sr-only">
											Previous
										</span>
										<svg
											className="h-5 w-5 cursor-pointer"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
											fill="currentColor"
											aria-hidden="true"
										>
											<path
												fillRule="evenodd"
												d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
												clipRule="evenodd"
											/>
										</svg>
									</span>
								);

							if (page === RIGHT_PAGE)
								return (
									<span
										key={index}
										aria-label="Next"
										onClick={this.handleMoveRight}
										className="relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 cursor-pointer"
									>
										<span className="sr-only">Next</span>
										<svg
											className="h-5 w-5 cursor-pointer"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
											fill="currentColor"
											aria-hidden="true"
										>
											<path
												fillRule="evenodd"
												d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
												clipRule="evenodd"
											/>
										</svg>
									</span>
								);

							return (
								<span
									key={index}
									onClick={this.handleClick(page)}
									className={`page-item${
										currentPage === page
											? "relative inline-flex items-center px-4 py-2 border border-blue-400 bg-blue-400 text-sm font-medium text-white hover:bg-gray-50 cursor-pointer"
											: "relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 cursor-pointer"
									}`}
								>
									{page}
								</span>
							);
						})}
					</nav>
				</div>
			</div>
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

import React from "react";
import PropTypes from "prop-types";

function TodoFilterGroup(props) {
	const { handleShowAll, handleShowDone, handleShowWorking } = props;

	const handleFilterAll = () => {
		if (!handleShowAll) return;

		handleShowAll();
	};

	const handleFilterDone = () => {
		if (!handleShowDone) return;

		handleShowDone();
	};

	const handleFilterWorking = () => {
		if (!handleShowWorking) return;

		handleShowWorking();
	};

	return (
		<div className="pt-5">
			<div className="flex justify-center items-baseline flex-wrap">
				<div className="flex m-2">
					<button
						className="text-base rounded-r-none hover:scale-110 focus:outline-none flex 
                             justify-center px-4 py-2 rounded font-bold cursor-pointer 
                             hover:bg-teal-700 hover:text-teal-100 bg-teal-100 text-teal-700 
                             border duration-200 ease-in-out border-teal-600 transition"
						onClick={handleFilterAll}
					>
						<div className="flex leading-5">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="100%"
								height="100%"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="feather feather-save w-5 h-5 mr-1"
							>
								<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
								<polyline points="17 21 17 13 7 13 7 21"></polyline>
								<polyline points="7 3 7 8 15 8"></polyline>
							</svg>
							Show All
						</div>
					</button>
					<button
						className="text-base rounded-l-none rounded-r-none border-l-0 border-r-0 
                             hover:scale-110 focus:outline-none flex justify-center px-4 py-2 
                             rounded font-bold cursor-pointer hover:bg-teal-700 
                             hover:text-teal-100 bg-teal-100 text-teal-700 border duration-200 
                             ease-in-out border-teal-600 transition"
						onClick={handleFilterDone}
					>
						<div className="flex leading-5">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="100%"
								height="100%"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="feather feather-edit w-5 h-5 mr-1"
							>
								<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
								<path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
							</svg>
							Show Todo Is Done
						</div>
					</button>
					<button
						className="text-base rounded-l-none hover:scale-110 focus:outline-none 
                             flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
                             hover:bg-teal-700 hover:text-teal-100 bg-teal-100  text-teal-700 
                             border duration-200 ease-in-out border-teal-600 transition"
						onClick={handleFilterWorking}
					>
						<div className="flex leading-5">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="100%"
								height="100%"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="feather feather-eye w-5 h-5 mr-1"
							>
								<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
								<circle cx="12" cy="12" r="3"></circle>
							</svg>
							Show Todo Is Working
						</div>
					</button>
				</div>
			</div>
		</div>
	);
}

TodoFilterGroup.propTypes = {
	handleShowAll: PropTypes.func,
	handleShowDone: PropTypes.func,
	handleShowWorking: PropTypes.func,
};

TodoFilterGroup.defaultProps = {
	handleShowAll: null,
	handleShowDone: null,
	handleShowWorking: null,
};

export default TodoFilterGroup;

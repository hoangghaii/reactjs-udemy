import React from "react";
import PropTypes from "prop-types";

function SearchResult(props) {
	const { data } = props;

	return (
		<li className="pl-5 pr-2 py-2 border-b-2 border-gray-100 flex items-center cursor-pointer hover:bg-yellow-50 hover:text-gray-900">
			<img
				className="w-12 h-12 mr-8"
				src={data.strDrinkThumb}
				alt={data.strDrinkThumb}
			/>

			{data.strDrink}
		</li>
	);
}

SearchResult.propTypes = {};

export default SearchResult;

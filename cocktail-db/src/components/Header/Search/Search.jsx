import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Search(props) {
	return (
		<div className="flex items-center ml-auto bg-gray-100 self-stretch custom-rounded px-4 w-2/3">
			<FontAwesomeIcon icon={faSearch} />
			<input
				type="text"
				className="px-4 self-stretch bg-transparent flex-grow outline-none"
				placeholder="Search"
			/>
		</div>
	);
}

Search.propTypes = {};

export default Search;

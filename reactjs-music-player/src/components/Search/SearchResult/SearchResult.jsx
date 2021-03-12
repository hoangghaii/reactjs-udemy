import React from "react";
import PropTypes from "prop-types";

function SearchResult(props) {
	return (
		<div className="results-wrapper">
			<div className="results-wrapper--list">
				<div>
					<i className="fas fa-history results-wrapper--icon results-wrapper--icon__history"></i>
					<span className="results-wrapper--text">adadas</span>
				</div>
				<i className="fas fa-times results-wrapper--icon" />
			</div>
		</div>
	);
}

SearchResult.propTypes = {};

export default SearchResult;

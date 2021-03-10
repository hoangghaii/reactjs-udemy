import React from "react";
import PropTypes from "prop-types";

function Genres(props) {
	return (
		<div className="left">
			<div className="genres-table-title">
				<span>Genres</span>
				<span>See all</span>
			</div>
			<div className="genres-table">
				<span className="grid-item">Pop</span>
				<span className="grid-item">Podcast</span>
				<span className="grid-item">Rock</span>
				<span className="grid-item">Classical</span>
				<span className="grid-item">HipHop</span>
				<span className="grid-item">Desi</span>
				<span className="grid-item">British</span>
			</div>
		</div>
	);
}

Genres.propTypes = {};

export default Genres;

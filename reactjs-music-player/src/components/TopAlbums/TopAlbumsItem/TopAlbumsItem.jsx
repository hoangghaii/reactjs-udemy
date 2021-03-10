import React from "react";
import PropTypes from "prop-types";

function TopAlbumsItem(props) {
	const { dataAlbum } = props;

	return (
		<div className="card-albums">
			<img
				src={dataAlbum.images.coverarthq}
				alt={dataAlbum.share.subject}
			/>
			<p>{dataAlbum.title}</p>
		</div>
	);
}

TopAlbumsItem.propTypes = {
	dataAlbum: PropTypes.object,
};

TopAlbumsItem.defaultProps = {
	dataAlbum: null,
};

export default TopAlbumsItem;
